import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { LogService } from './../../shared/services/log.service';

@Injectable()
export class LoginService {
  loginUrl: string = '';

  constructor(
    private http: Http,
    private log: LogService
  ) { }

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.request(data)
      .do(response => this.log.info('Login raw response: ', response))
      .map(response => response.json())
      .do(response => this.log.info('Login parsed response: ', response))
      .map(response => {
        let result: LoginResponse = new LoginResponse(response.result);
        if (!response.result) {
          result.message = 'Credentials are not valid'; 
        }
        return result;
      })
      .catch(error => {
        this.log.error('Login error response: ', error);
        return Observable.of(new LoginResponse(false, 'An error ocurred'));
      });
  }

  private request(data: LoginRequest): Observable<any> {
    return Observable.create(observer => {
      let simulateError: boolean = data.username === 'error' && data.password === 'error';
      if (simulateError) {
        observer.error('Internal server error');
      } else {
        observer.next({
          json: () => ({
            result: data.username === 'admin' && data.password === 'admin'
          })
        });
      }
    });
    // return this.http.post(this.loginUrl, data);
  }
}

class LoginRequest {
  constructor(
    public username: string,
    public password: string
  ) { }
}

class LoginResponse {
  constructor(
    public result: boolean,
    public message?: string
  ) { }
}
