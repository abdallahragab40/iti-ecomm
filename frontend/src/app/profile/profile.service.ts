import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'app/auth/auth.service';
import { environment } from 'environments/environment';

@Injectable()
export class ProfileService implements Resolve<any> {
  about: any;
  aboutOnChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private authService: AuthService
  ) {
    // Set the defaults
    this.aboutOnChanged = new BehaviorSubject({});
  }

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
      Promise.all([this.getUser(this.getAbout())]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get about
   */
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

  getUserRole() {
    return this.authService.getRole();
  }
}
