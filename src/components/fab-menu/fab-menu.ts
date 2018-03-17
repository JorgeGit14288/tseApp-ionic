import { Component } from '@angular/core';

/**
 * Generated class for the FabMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fab-menu',
  templateUrl: 'fab-menu.html'
})
export class FabMenuComponent {

  text: string;

  constructor() {
    console.log('Hello FabMenuComponent Component');
    this.text = 'Hello World';
  }

}
