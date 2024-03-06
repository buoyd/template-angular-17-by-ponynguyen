import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `<router-outlet />`,
})
export class AppComponent {
  http = inject(HttpClient)

  constructor() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      console.log(res)
    })
  }
}
