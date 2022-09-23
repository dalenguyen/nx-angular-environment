import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppConfig, EnvironmentService } from '@dalenguyen/common';

@Component({
  selector: 'dalenguyen-root',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1>{{title}}</h1>
    <pre>{{config | json}}</pre>
    <pre>{{envService.getAppConfig() | json}}</pre>
  `,
})
export class AppComponent {
  title = 'Angular Environment';
  config = inject(AppConfig)
  envService = inject(EnvironmentService)
}
