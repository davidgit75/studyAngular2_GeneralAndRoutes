import './polyfills.ts';

import { platformBrowserDynamic } from '../../baseNodeModules/node_modules/@angular/platform-browser-dynamic';
import { enableProdMode } from '../../baseNodeModules/node_modules/@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
