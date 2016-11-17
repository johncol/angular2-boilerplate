import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { AuthorizationModule } from './authorization/authorization.module';

import { appRoutes } from './routing/app.routing';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SamplePageComponent } from './sample-page/sample-page.component';

import { RoutingService } from './routing/routing.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    AuthorizationModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    SamplePageComponent
  ],
  providers: [
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
