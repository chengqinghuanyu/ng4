import { Component } from '@angular/core';
import { GlobalState } from './global.state';
@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isMenuCollapsed: boolean = false;
    constructor(private _state: GlobalState) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });
    }
  
    
}
