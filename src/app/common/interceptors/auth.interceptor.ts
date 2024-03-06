import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is ${req.url}`);

  const autReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer the token'),
  });

  return next(autReq);
};
