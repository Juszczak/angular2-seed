import './polyfills.ts';
import './vendor.ts';
import './styles.ts';

import { enableProdMode } from '@angular/core';

if ('production' === WEBPACK_ENV) {
  enableProdMode();
}

import { bootstrap } from '@angular/platform-browser-dynamic';

import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { Type } from '@angular/core';

import { App } from './app/app.component';

document.addEventListener('DOMContentLoaded', () => {
  bootstrap(<Type>App, [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
  ]).catch(err => console.error(err));
});
