import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
public doctors:any;
  constructor(public navCtrl: NavController) {
	this.doctors = [
		  {
		      Name:"Dr.Shaw",
		      Graduation:"MBBS",
		      PostGraduation:"MD",
		      Specialization:"General Medicine DNB",
		      Experience:"5",
		      Fees:"500",
		      StartTiming:"MON-TUE 11:00AM-1:00PM",
		      Rating:"90%",
		      image:"assets/images/doctor1.png"
		  }
		]
  }

}
