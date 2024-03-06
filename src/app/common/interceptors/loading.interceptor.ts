import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  // show loading
  return next(req).pipe(
    finalize(() => {
      // hidden loading
    }),
  );
};
