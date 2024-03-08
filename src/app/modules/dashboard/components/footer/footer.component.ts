import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: ` <footer
    class="flex items-center justify-center text-center h-20 px-6 sm:px-10 bg-white dark:bg-gray-900 text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 border-t border-slate-300 dark:border-gray-700"
  >
    2024 Template Core Angular Standalone by Pony Nguyen. All rights reserved.
  </footer>`,
})
export class FooterComponent {}
