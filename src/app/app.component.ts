import { Component, Inject, OnInit } from 'angular2/core';
import { Router, RouteConfig, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

import { Main } from './components/main/main.component';

@Component({
  selector: 'app',
  template: require('./app.template.html'),
  styles: [
    require('./app.styles.styl'),
  ],
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {
    path: '/',
    component: Main,
    name: 'Main',
    useAsDefault: true,
  }, {
    path: '/**',
    redirectTo: ['Main'],
  },
])
export class App {}
