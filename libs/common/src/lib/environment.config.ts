export abstract class BoostrapConfig {
    abstract readonly apiUrl: string;
  }

export abstract class AppConfig {
  // some feature flags
}

  
export abstract class Environment {
    abstract readonly environment: string;
    abstract readonly production: boolean;
  }
  
