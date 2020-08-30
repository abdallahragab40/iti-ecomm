import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _toastService: ToastService) {}

  addErrorToast(message: string) {
    this._toastService.error(message);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        if (error.error.message) {
          errorMessage = error.error.message;
        }
        this.addErrorToast(errorMessage);
        return throwError(error);
      })
    );
  }
}
