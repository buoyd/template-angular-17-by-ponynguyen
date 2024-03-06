import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authInterceptor } from './common/interceptors/auth.interceptor';
import { errorInterceptor } from './common/interceptors/error.interceptor';
import { loggingInterceptor } from './common/interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor, loggingInterceptor])),
  ],
};
