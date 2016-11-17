import { Component, OnInit } from '@angular/core';

import { NavigationItem } from './navigation-item';
import { RoutingService } from './../routing/routing.service';

@Component({
    selector: 'app-navigation',
    styleUrls: ['navigation.component.css'],
    templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {
    items: NavigationItem[];

    constructor(
        private routing: RoutingService
    ) { }

    ngOnInit() {
        this.items = [
            new NavigationItem('Login', '/login'),
            new NavigationItem('Sample page', '/sample-page'),
            new NavigationItem('Sample form', '/sample-form')
        ];
    }
}
