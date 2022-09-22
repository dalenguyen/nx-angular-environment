import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppConfig } from '@dalenguyen/common'

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('assets/boostrap.config.json')
  .then(res => res.json())
  .then(config => {
    bootstrapApplication(AppComponent, {
      providers: [
        {
          provide: AppConfig,
          useValue: config
        }
      ]
    })
  })

