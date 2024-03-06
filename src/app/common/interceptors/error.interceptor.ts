import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if ([401, 403].includes(error.status)) {
        console.log('Unauthorized request');
        // auth service logout();
      }

      if ([404].includes(error.status)) {
        console.log('Page not found');
        // handle logic here
      }

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message || error.statusText}`;
      } else {
        errorMessage = `Error code: ${error.status}, message: ${error.message}`;
      }

      return throwError(() => errorMessage);
    }),
  );
};
