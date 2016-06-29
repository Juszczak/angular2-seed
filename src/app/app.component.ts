import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouteConfig, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { MdIconRegistry } from '@angular2-material/icon';
import { Main } from './components/main/main.component';

@Component({
  selector: 'app',
  template: require('./app.template.html'),
  styles: [
    require('./app.styles.styl'),
  ],
  providers: [
    MdIconRegistry,
  ],
  directives: [
    ROUTER_DIRECTIVES,
  ],
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
