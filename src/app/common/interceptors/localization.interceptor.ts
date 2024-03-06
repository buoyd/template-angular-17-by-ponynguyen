import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

export const localizationInterceptor: HttpInterceptorFn = (req, next) => {
  // const userLocale = inject(localeService);
  const userLocale = 'vi';
  const localizedRequest = req.clone({
    setHeaders: {
      'Accept-Language': userLocale,
    },
  });
  return next(localizedRequest);
};
