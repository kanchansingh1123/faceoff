import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-bar',
  templateUrl: 'header.html'
})
export class HeaderBarPage {

  constructor(public navCtrl: NavController) {

  }

}
