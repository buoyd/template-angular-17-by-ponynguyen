import { HttpInterceptorFn } from '@angular/common/http';

export const compressionInterceptor: HttpInterceptorFn = (req, next) => {
  const compressedRequest = req.clone({
    setHeaders: {
      // 'Accept-Encoding': 'gzip, deflate, br, zstd',
    },
  });
  return next(compressedRequest);
};
