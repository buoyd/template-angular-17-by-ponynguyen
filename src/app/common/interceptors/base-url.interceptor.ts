import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiRequest = req.clone({
    url: `${environment.url}${req.url}`,
  });
  return next(apiRequest);
};
