import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from '@app/app.module';

if (environment.production) {
  enableProdMode();
}

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log('Service worker installed');
  }, (err) => {
    console.error('Service worker error:', err);
  });
}

platformBrowserDynamic().bootstrapModule(AppModule);
