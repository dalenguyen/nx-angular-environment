import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from '@dalenguyen/common';

@Component({
  selector: 'dalenguyen-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    From Avatar
    <pre>{{appConfig | json}}</pre>
  `,
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  appConfig = inject(AppConfig)

  constructor() {}

  ngOnInit(): void {}
}
