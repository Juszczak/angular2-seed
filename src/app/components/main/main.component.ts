import { Component } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

// import { MD_BUTTON_DIRECTIVES } from '@angualr2-material/button';
// import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
// import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox';
// import { MD_RADIO_DIRECTIVES, MdRadioDispatcher } from '@angular2-material/radio';
// import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
// import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
// import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
// import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  selector: 'main',
  template: require('./main.template.html'),
  styles: [
    require('./main.styles.styl'),
  ],
  directives: [
    MD_TOOLBAR_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_ICON_DIRECTIVES,
    MD_TABS_DIRECTIVES,
  ],
})
export class Main {
  private _router: Router;
  private _routeParams: RouteParams;

  constructor(router: Router, routeParams: RouteParams) {
    this._routeParams = routeParams;
    this._router = router;
  }
}
