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
  public report:any;
  public reportGroups:any = [];
  reportDetailsPage: any = ReportDetailPage;
  public reports: string = "reports";
  public isClassVisible : any = true;
  public service:any;
  public addGroup:any=[];
  public serviceGroups:any = [];
  public prescriptions: string = "prescriptions";
  constructor(public navCtrl: NavController) {
  		this.report = [
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
  		];
  		this.service = 
	  		{
	  			Name:"Fever",
	  			DoctorsCounr:"01",
	  			icon:"note"
	  		}
  		this.addGroup = {
				          Name:"Add New",
				          icon:"plus"
				        }
  }

  ionViewDidLoad(){
		for (var i = 0 ; i < this.report.length; i += 2) {
	        let items:any = [this.report[i]];
	        if (this.report[i + 1]) {
	            items.push(this.report[i + 1]);
	        }
	        this.reportGroups.push(items);
    	}

 }

}
