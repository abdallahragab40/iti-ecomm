import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AcademyCourseService implements Resolve<any> {
  onCourseChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onCourseChanged = new BehaviorSubject({});
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
      Promise.all([this.getCourse(route.params.courseId)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get course
   *
   * @param courseId
   * @returns {Promise<any>}
   */
  getCourse(courseId): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`courses/${courseId}`).subscribe((response: any) => {
        console.log(response);
        this.onCourseChanged.next(response);
        resolve(response);
      }, reject);
    });
  }

  createCourse(course): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(`courses`, course).subscribe((response: any) => {
        resolve(response);
      }, reject);
    });
  }
}
