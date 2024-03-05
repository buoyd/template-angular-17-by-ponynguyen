import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [NgIf],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
    public isOpen: boolean = false;
}
