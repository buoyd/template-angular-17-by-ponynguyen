import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authInterceptor } from './common/interceptors/auth.interceptor';
import { baseUrlInterceptor } from './common/interceptors/base-url.interceptor';
import { cachingInterceptor } from './common/interceptors/caching.interceptor';
import { compressionInterceptor } from './common/interceptors/compression.interceptor';
import { cspInterceptor } from './common/interceptors/csp.interceptor';
import { errorInterceptor } from './common/interceptors/error.interceptor';
import { headersInterceptor } from './common/interceptors/headers.interceptor';
import { jwtRefreshInterceptor } from './common/interceptors/jwt-refresh.interceptor';
import { loadingInterceptor } from './common/interceptors/loading.interceptor';
import { localizationInterceptor } from './common/interceptors/localization.interceptor';
import { loggingInterceptor } from './common/interceptors/logging.interceptor';
import { offlineModeInterceptor } from './common/interceptors/offline-mode.interceptor';
import { retryInterceptor } from './common/interceptors/retry.interceptor';
import { timeoutInterceptor } from './common/interceptors/timeout.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorInterceptor,
        loggingInterceptor,
        headersInterceptor,
        loadingInterceptor,
        timeoutInterceptor,
        baseUrlInterceptor,
        retryInterceptor,
        offlineModeInterceptor,
        jwtRefreshInterceptor,
        retryInterceptor,
        localizationInterceptor,
        cspInterceptor,
        compressionInterceptor,
        cachingInterceptor,
      ]),
    ),
  ],
};
