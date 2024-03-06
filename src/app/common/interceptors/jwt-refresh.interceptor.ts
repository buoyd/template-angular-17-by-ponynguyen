import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const jwtRefreshInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && error.error && error.error.message === 'Token expired') {
        // Token expired; attempt to refresh it
        // return authService.refreshToken().pipe(
        //   switchMap(() => {
        //     // Retry the original request with the new token
        //     const updatedRequest = req.clone({
        //       setHeaders: {
        //         // Authorization: `Bearer ${authService.getAccessToken()}`,
        //       },
        //     });
        //     return next(updatedRequest);
        //   }),
        //   catchError(() => {
        //     // Refresh token failed; log out the user or handle the error
        //     // For example, you can redirect to the login page
        //     // authService.logout();
        //     return throwError(() => 'Token refresh failed');
        //   }),
        // );
      }
      return throwError(() => error);
    }),
  );
};
