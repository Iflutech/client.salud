import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { provideNzIcons } from './providers/icons.provider';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import es from '@angular/common/locales/es';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideNzIcons(),
    provideNzI18n(es_ES), 
    importProvidersFrom(FormsModule), 
    importProvidersFrom(HttpClientModule), 
    provideAnimations()
  ]
};
