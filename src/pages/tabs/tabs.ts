import { Component } from '@angular/core';
import { SearchDoctors } from '../searchdoctors/searchdoctors';
import { AboutPage } from '../about/about';
import { NotificationPage } from '../notification/notification';
import { SchedulePage } from '../schedule/schedule';
import { RecordsPage } from '../records/records';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchDoctors;
  tab2Root: any = AboutPage;
  tab3Root: any = NotificationPage;
  tab5Root: any = SchedulePage;

  tab4Root: any = RecordsPage;
  constructor() {

  }
}
