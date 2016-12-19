import { Component } from '@angular/core';
import { SearchDoctors } from '../searchdoctors/searchdoctors';
import { AboutPage } from '../about/about';
import { NotificationPage } from '../notification/notification';
import { SchedulePage } from '../schedule/schedule';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchDoctors;
  tab2Root: any = AboutPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = SchedulePage;

  constructor() {

  }
}
