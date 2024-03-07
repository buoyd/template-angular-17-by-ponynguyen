import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token: string | null = 'ponynguyen';
  constructor() {}
  public isAuthenticated(): boolean {
    return this.token != null;
  }
}
