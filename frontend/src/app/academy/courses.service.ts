import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class AcademyCoursesService implements Resolve<any> {
  onCategoriesChanged: BehaviorSubject<any>;
  onCoursesChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  about: any;
  aboutOnChanged: BehaviorSubject<any>;
  constructor(
    private _httpClient: HttpClient,
    private authService: AuthService
  ) {
    // Set the defaults
    this.onCategoriesChanged = new BehaviorSubject({});
    this.onCoursesChanged = new BehaviorSubject({});
    this.aboutOnChanged = new BehaviorSubject({});
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([this.getCategories(), this.getCourses()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get categories
   *
   * @returns {Promise<any>}
   */
  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`courses/categories`).subscribe((response: any) => {
        console.log(response);
        this.onCategoriesChanged.next(response.categories);
        resolve(response);
      }, reject);
    });
  }

  /**
   * Get courses
   *
   * @returns {Promise<any>}
   */
  getCourses(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`courses`).subscribe((response: any) => {
        this.onCoursesChanged.next(response);
        resolve(response);
      }, reject);
    });
  }

  getAbout() {
    return this.authService.getUser().username;
  }

  getUser(username: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`users/${username}`).subscribe((res: any) => {
        this.about = res.user;
        this.aboutOnChanged.next(this.about);
        resolve(this.about);
      }, reject);
    });
  }
}
