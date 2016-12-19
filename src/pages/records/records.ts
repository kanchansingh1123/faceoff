import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportDetailPage } from '../reportdetails/reportdetails';

/*
  Generated class for the Password page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
export class RecordsPage {
  public services:any;
  public serviceGroups:any = [];
  reportDetailsPage: any = ReportDetailPage;
  public reports: string = "reports";
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
