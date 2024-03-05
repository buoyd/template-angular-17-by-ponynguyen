import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page-v2',
    standalone: true,
    imports: [NgIf],
    templateUrl: './landing-page-v2.component.html',
    styleUrl: './landing-page-v2.component.scss',
})
export class LandingPageV2Component {
    public isOpen: boolean = false;
}
