import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AppConfig } from '@dalenguyen/common';

@Component({
  selector: 'dalenguyen-root',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h1>{{title}}</h1>
    <pre>{{config | json}}</pre>
  `,
})
export class AppComponent {
  title = 'Angular Environment';
  config = inject(AppConfig)
}
