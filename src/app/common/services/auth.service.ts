import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return this.token != null;
  }

  public signIn() {
    localStorage.setItem('token', 'ponynguyen');
  }
}
