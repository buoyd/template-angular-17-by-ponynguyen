import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../common/services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  authService = inject(AuthService);

  constructor() {
    this.authService.redirectToDashboard();
  }
}
