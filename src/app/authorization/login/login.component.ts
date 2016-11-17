import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder } from '@angular/forms';

import { CustomValidators } from './../../shared/validators/custom-validators';
import { LoginService } from './login.service';
import { RoutingService } from './../../routing/routing.service';

@Component({
    selector: 'app-login',
    styleUrls: ['login.component.css'],
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    state: any;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private routing: RoutingService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', CustomValidators.required],
            password: ['', CustomValidators.required]
        });
        this.state = {
            message: null
        };
    }

    onSubmit(): void {
        this.state.message = null;
        if (this.form.valid) {
            this.requestLogin();
        } else {
            this.state.message = 'Enter your username and password';
        }
    }

    private requestLogin(): void {
        this.loginService.login(this.form.value)
            .subscribe(response => {
                if (response.result) {
                    this.routing.toSamplePage();
                } else {
                    this.state.message = response.message;
                }
            });
    }
}
