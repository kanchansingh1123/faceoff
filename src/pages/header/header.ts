import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'header-bar',
  templateUrl: 'header.html'
})
export class HeaderBarPage {
	searchPage: any = SearchPage;
	notificationPage: any = NotificationPage;
  constructor(public navCtrl: NavController) {

  }

}

