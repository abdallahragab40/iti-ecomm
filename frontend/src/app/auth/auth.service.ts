import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Instructor } from './instructor.model';
import { Student } from './student.model';
import { Community } from './community.model';
import { ToastService } from 'angular-toastify';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _toastService: ToastService
  ) {}

  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private user: User;
  private userId: string;
  addSuccessToast(message: string) {
    this._toastService.success(message);
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUser() {
    return this.user;
  }

  getUserId() {
    return this.user._id;
  }

  getRole() {
    var decoded = jwt_decode(this.getToken());
    return decoded.role;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.user = {
        _id: authInformation.userId,
        username: authInformation.username,
        image: authInformation.image,
        email: authInformation.email,
      };
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  createInstructor(instructor: Instructor) {
    this.http.post(`instructor/signup`, instructor).subscribe(
      () => {
        this.addSuccessToast(
          `New Instructor was created successfully \nYou can now login!`
        );
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  createCommunity(community: Community) {
    this.http.post(`community/signup`, community).subscribe(
      () => {
        this.addSuccessToast(
          `New Community was created successfully \nYou can now login!`
        );
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  createStudent(student: Student) {
    this.http.post(`student/signup`, student).subscribe(
      () => {
        this.addSuccessToast(
          `New Student was created successfully \nYou can now login!`
        );
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  login(authData: { email: string; password: string }) {
    this.http
      .post<{ token: string; user: User; expiresIn: number }>('login', authData)
      .subscribe(
        (response) => {
          console.log(response);

          const token = response.token;
          this.token = token;
          if (token) {
            const expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.isAuthenticated = true;
            this.userId = response.user._id;
            this.user = response.user;

            this.authStatusListener.next(true);
            const now = new Date();
            const expirationDate = new Date(
              now.getTime() + expiresInDuration * 1000
            );
            this.saveAuthData(token, expirationDate, this.user);
            this.router.navigate(['/']);
            this.addSuccessToast(`Welcome ${this.user.username}`);
          }
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.userId = null;
    this.user = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  forgotPassword(email: string) {
    this.http
      .put<{ message: string; email: string }>('forgotPassword', email)
      .subscribe(
        (response) => {
          this.router.navigateByUrl(`/auth/mail-confirm/${response.email}`);
        },
        (error) => {
          this.authStatusListener.next(false);
        }
      );
  }

  resetPassword(authData: { password: string }, token: string) {
    this.token = token;
    console.log(this.token);
    this.http.put<{ message: string }>('resetPassword', authData).subscribe(
      (response) => {
        this.router.navigate(['/auth/login']);
        this.addSuccessToast(response?.message);
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', user._id);
    localStorage.setItem('username', user.username);
    localStorage.setItem('email', user.email);
    localStorage.setItem('image', user.image);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('image');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');
    const image = localStorage.getItem('image');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
      userId,
      username,
      email,
      image,
    };
  }
}
