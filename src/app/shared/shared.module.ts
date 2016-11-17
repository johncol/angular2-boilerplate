import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { LogService } from './services/log.service';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AlertComponent
  ],
  providers: [
    LogService
  ],
  exports: [
    AlertComponent
  ]
})
export class SharedModule { }
