import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DoctorDetailsPage } from '../doctordetails/doctordetails';

@Component({
  selector: 'page-serach-doctors',
  templateUrl: 'searchdoctors.html'
})
export class SearchDoctors {

  public services:any;
  public serviceGroups:any = [];
  detailsPage: any = DoctorDetailsPage;
  constructor(public navCtrl: NavController) {
  		this.services = [
	  		{
	  			Name:"Dentist",
	  			DoctorsCounr:"03",
	  			icon:"tooth"
	  		},
	  		{
	  			Name:"Dermatologist",
	  			DoctorsCounr:"02",
	  			icon:"head"
	  		},{
	  			Name:"Gastroenterologist",
	  			DoctorsCounr:"05",
	  			icon:"cardio"
	  		},{
	  			Name:"ENT Specialist",
	  			DoctorsCounr:"02",
	  			icon:"neck"
	  		},
	  		{
	  			Name:"Psychiatrist",
	  			DoctorsCounr:"01",
	  			icon:"brain"
	  		},
	  		{
	  			Name:"Cardiologist",
	  			DoctorsCounr:"06",
	  			icon:"heart"
	  		}
  		]
  }
   ionViewDidLoad(){
	  		for (var i = 0 ; i < this.services.length; i += 2) {
                let items:any = [this.services[i]];
                if (this.services[i + 1]) {
                    items.push(this.services[i + 1]);
                }
                this.serviceGroups.push(items);
            }

}
}