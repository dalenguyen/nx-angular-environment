import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Environment, EnvironmentService } from '@dalenguyen/common';
import { AvatarComponent } from '@dalenguyen/shared/ui';

@Component({
  selector: 'dalenguyen-root',
  standalone: true,
  imports: [JsonPipe, AvatarComponent],
  template: `
    <h1>{{ title }}</h1>
    From App Component
    <pre>{{ env | json }}</pre>
    <pre>{{ envService.getAppConfig() | json }}</pre>
    <dalenguyen-avatar></dalenguyen-avatar>
  `,
})
export class AppComponent {
  title = 'Angular Environment';
  env = inject(Environment);
  envService = inject(EnvironmentService);
}
