import { Component } from '@angular/core';
import { NavController,ActionSheetController} from 'ionic-angular';


/*
  Generated class for the Password page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'report-detail-page',
  templateUrl: 'reportdetails.html'
})
export class ReportDetailPage {
  public services:any;
  public addGroup:any;
  public serviceGroups:any = [];
  public reports: string = "reports";
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
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
	  		}
  		]
      this.addGroup = [
        {
          Name:"Add New",
          icon:"plus"
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

  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
      title: 'Add New',
      buttons: [
        {
          cssClass:'upload upload-icon',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          cssClass:'photo photo-icon',
          role: 'destructive',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ],
       cssClass:'reportactiontitle'
    });
    actionSheet.present();
  }

}
