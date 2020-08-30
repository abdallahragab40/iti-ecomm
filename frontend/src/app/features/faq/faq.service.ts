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
export class FaqService implements Resolve<any> {
  faqs: any;
  onFaqsChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onFaqsChanged = new BehaviorSubject({});
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
      Promise.all([this.getFaqs()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get faqs
   */
  getFaqs(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`faqs`).subscribe((response: any) => {
        this.faqs = response.faqs;
        this.onFaqsChanged.next(this.faqs);
        resolve(this.faqs);
      }, reject);
    });
  }
}
