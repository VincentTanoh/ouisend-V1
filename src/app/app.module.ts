import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {httpInterceptorProviders} from '@app/interceptors';
import {AuthenticationService} from '@app/services/authentication.service';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundErrorPageComponent } from './views/pages/not-found-error-page/not-found-error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { AlertComponent } from './views/shared/alert/alert.component';
import {AlertModule} from '@app/modules/shared/alert.module';
import { NgAisModule } from 'angular-instantsearch';
import {AlgoliaService} from '@app/services/algolia.service';
import {AutoLogoutService} from '@app/services/auto-logout.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundErrorPageComponent,
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    AlertModule

  ],
  providers: [
    AuthenticationService,
    AlgoliaService,
    AutoLogoutService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
