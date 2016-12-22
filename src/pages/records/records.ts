import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportDetailPage } from '../reportdetails/reportdetails';
import { AlertController } from 'ionic-angular';


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
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  		this.report = [
			 	{
				 	Name:"Blood Reports",
				 	Count:"01",
				 	icon:"feature"
			 	},
			 	{
				 	Name:"X-Ray",
				 	Count:"02",
				 	icon:"plant"
			 	},
			 	{
				 	Name:"Thyroid Profile",
				 	Count:"01",
				 	icon:"throat"
			 	},
			 	{
				 	Name:"Biopsy",
				 	Count:"00",
				 	icon:"molecule"
			 	},
			 	{
				 	Name:"Psychiatrist",
				 	Count:"01",
				 	icon:"meter"
			 	},
			 	{
				 	Name:"Cardiologist",
				 	Count:"06",
				 	icon:"inject"
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

 addFile(){ 
    let prompt = this.alertCtrl.create({
      title: 'New folder',
      cssClass:'newfoldercls',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          	return true;
          },
          cssClass:'newfoldercancelcls',
        },
        {
          text: 'ok',
          handler: data => {
          	return true;
          },
          cssClass:'newfoldercls',
        }
      ]
    });
    prompt.present();
 }

}
