import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectTo = inject(Router);
  loading = inject(LoadingService);

  token: string | null = null;

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  redirectToDashboard() {
    this.token = localStorage.getItem('token');
    this.token && this.redirectTo.navigate(['/dashboard']);
  }

  login() {
    this.loading.show();
    this.token = 'ponynguyen';
    localStorage.setItem('token', this.token);
    this.redirectTo.navigate(['/dashboard']);
    this.loading.hide();
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.redirectTo.navigate(['/auth/sign-in']);
  }
}
