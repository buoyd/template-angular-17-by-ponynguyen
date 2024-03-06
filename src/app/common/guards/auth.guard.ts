import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuth = inject(AuthService).isAuthenticated();
  const redirectToLogin = inject(Router).createUrlTree(['/auth/sign-in']);
  return isAuth ? true : redirectToLogin;
};
