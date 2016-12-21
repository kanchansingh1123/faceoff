import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SelectLocationPage } from '../selectlocation/selectlocation';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public doctorsList:any;
  public filter : string = "";
  selectLocationPage: any = SelectLocationPage;
  constructor(public navCtrl: NavController) {
       this.doctorsList = [
	       {
	       		name:"Dr. Amaresh",
	       		serviceType:"Dermatologist"
	       },
	       {
	       		name:"Dr. Badrinath",
	       		serviceType:"ENT Specialist"
	       },
	       {
	       		name:"Dr. Chandar",
	       		serviceType:"Cardiologist"
	       },
	       {
	       		name:"Dr. Ganga Raj",
	       		serviceType:"Cardiologist"
	       }
       ]
  }

}
