import { inject, Injectable } from '@angular/core';
import { AppConfig, Environment } from './environment.config';
import {HttpClient} from '@angular/common/http'
import { lastValueFrom } from 'rxjs';

export const initAppConfigFn = (envService: EnvironmentService) => 
  () => envService.loadAppConfig('assets/boostrap.config.json')

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  http = inject(HttpClient)
  env = inject(Environment)

  private appConfig: AppConfig | null = null

  async loadAppConfig(path: string): Promise<void> {
    console.log(this.env)
    this.appConfig = await lastValueFrom(this.http.get<AppConfig>(path))
  }

  getAppConfig(): AppConfig | null {
    return this.appConfig
  }
}
