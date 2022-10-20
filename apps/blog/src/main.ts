import { APP_INITIALIZER, enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {  BootstrapConfig, Environment, EnvironmentService, initAppConfigFn } from '@dalenguyen/common'

import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

fetch('assets/boostrap.config.json')
  .then(res => res.json())
  .then(config => {
    bootstrapApplication(AppComponent, {
      providers: [
        importProvidersFrom([HttpClientModule]),
        {
          provide: Environment,
          useValue: environment
        }, 
        {
          provide: BootstrapConfig,
          useValue: config
        }, 
        // A DI token that you can use to provide one or more initialization functions.
        // The provided functions are injected at application startup and executed during app initialization.
        // If any of these functions returns a Promise or an Observable, initialization does not complete until the Promise is resolved or the Observable is completed.
        {
          provide: APP_INITIALIZER,
          useFactory: initAppConfigFn,
          multi: true,
          deps: [EnvironmentService]
        }
      ]
    })
  })

