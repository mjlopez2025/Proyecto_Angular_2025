import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@angular/compiler'; // Agregar esta línea

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
