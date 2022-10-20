import { inject, Injectable } from '@angular/core';
import { AppConfig, BootstrapConfig } from './environment.config';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export const initAppConfigFn = (envService: EnvironmentService) => () =>
  envService.loadAppConfig('assets/bootstrap.config.json');

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  http = inject(HttpClient);
  config = inject(BootstrapConfig);

  private appConfig: AppConfig | null = null;

  async loadAppConfig(path: string): Promise<void> {
    console.log(this.config);
    this.appConfig = await lastValueFrom(this.http.get<AppConfig>(path));
  }

  getAppConfig(): AppConfig | null {
    return this.appConfig;
  }
}
