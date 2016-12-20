
import { Component } from '@angular/core';
import { SearchDoctors } from '../searchdoctors/searchdoctors';
import { SchedulePage } from '../schedule/schedule';
import { RecordsPage } from '../records/records';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SearchDoctors;
  tab2Root: any = RecordsPage;
  tab3Root: any = SchedulePage;
  tab4Root: any = SearchPage;
  constructor() {

  }
}
