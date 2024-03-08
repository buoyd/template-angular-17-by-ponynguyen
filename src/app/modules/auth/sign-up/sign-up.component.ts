import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../common/services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  authService = inject(AuthService);

  constructor() {
    this.authService.redirectToDashboard();
  }
}
