import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

@Injectable()
export class LogService {
  enabled: boolean = environment.logging;

  constructor() { }

  info(message: string, data?: any): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: any): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: any): void {
    this.log('error', message, data);
  }

  private log(method: string, message: string, data?: any): void {
    if (this.enabled) {
      if (data) {
        console[method](message, data);
      } else {
        console[method](message);
      }
    }
  }

}
