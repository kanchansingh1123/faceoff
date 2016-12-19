import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-doctor-details',
  templateUrl: 'doctordetails.html'
})
export class DoctorDetailsPage {
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
	      EndTiming:"THU-SAT 7:00PM-9:00PM",
	      Rating:"90%",
	      image:"assets/images/doctor1.png"
	  },
	  {
	      Name:"Dr.Shaw123",
	      Graduation:"MBBS",
	      PostGraduation:"MD",
	      Specialization:"General Medicine DNB",
	      Experience:"5",
	      Fees:"500",
	      StartTiming:"MON-TUE 11:00AM-1:00PM",
	      EndTiming:"THU-SAT 7:00PM-9:00PM",
	      Rating:"85%",
	      image:"assets/images/doctor2.png"
	  }
  ];
  }
  
}
