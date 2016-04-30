import { Component } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

@Component({
  selector: 'main',
  template: require('./main.template.html'),
  styles: [
    require('./main.styles.styl'),
  ],
  directives: [],
})
export class Main {
  private _router: Router;
  private _routeParams: RouteParams;

  constructor(router: Router, routeParams: RouteParams) {
    this._routeParams = routeParams;
    this._router = router;
  }
}
