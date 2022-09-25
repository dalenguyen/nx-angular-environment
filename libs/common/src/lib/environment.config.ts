export abstract class AppConfig {
    abstract readonly environment: string;
    abstract readonly production: boolean;
  }

  
export abstract class Environment {
    abstract readonly environment: string;
    abstract readonly production: boolean;
  }
  
