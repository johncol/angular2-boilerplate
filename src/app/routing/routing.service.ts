import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {

    constructor(
        private router: Router
    ) { }

    toLoginPage(): void {
        this.router.navigate(['/login']);
    }

    toSamplePage(): void {
        this.router.navigate(['/sample-page']);
    }

    toSampleForm(): void {
        this.router.navigate(['/sample-form']);
    }

}
