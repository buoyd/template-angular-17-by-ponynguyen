import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoadingComponent } from './common/components/loading/loading.component';
import { LoadingService } from './common/services/loading.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, LoadingComponent, NgIf],
  template: `<router-outlet /> <app-loading *ngIf="loading.isLoading" />`,
})
export class AppComponent {
  http = inject(HttpClient);
  loading = inject(LoadingService);

  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      console.log(res);
    });
  }
}
