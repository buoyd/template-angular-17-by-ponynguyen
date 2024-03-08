import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../common/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  authService = inject(AuthService);

  constructor() {
    this.authService.redirectToDashboard();
  }
}
