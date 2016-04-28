import './polyfills.ts';
import './vendor.ts';
import './styles.ts';

import { enableProdMode } from 'angular2/core';

if ('production' === WEBPACK_ENV) {
  enableProdMode();
}

import { bootstrap } from 'angular2/platform/browser';

import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Type } from 'angular2/core';

import { App } from './app/app.component';

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(<Type>App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
  ]).catch(err => console.error(err));
});
