import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Environment, EnvironmentService } from '@dalenguyen/common';

@Component({
  selector: 'dalenguyen-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    From Avatar
    <pre>{{ env | json }}</pre>
    <pre>{{ envService.getAppConfig() | json }}</pre>
  `,
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  env = inject(Environment);
  envService = inject(EnvironmentService);
}
