import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class PublicProfileService implements Resolve<any> {
  user: any;
  userOnChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.userOnChanged = new BehaviorSubject({});
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
      Promise.all([this.getUser(route.params.username)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get about
   */
  getUser(username: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`users/${username}`).subscribe((res: any) => {
        this.user = res.user;
        this.userOnChanged.next(this.user);
        resolve(this.user);
      }, reject);
    });
  }
}
