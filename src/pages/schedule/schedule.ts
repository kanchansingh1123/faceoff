import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController , ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page/modal-page';


@Component({
  selector: 'page-schedulerList',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  public isRemainder:boolean=true;
  public isDiet:boolean=false;
  public isAppointments:boolean=false;
  public isWorkout:boolean=false;
  public doctors:any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController) {
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
	 } 
  ];
  }


showRemainderPopup() {
  let modal = this.modalCtrl.create(ModalPage);
  modal.present();
}
showAppointments(){
this.isRemainder=false;
this.isAppointments=true;
this.isDiet=false;
this.isWorkout=false;
}
showRemainders(){
this.isRemainder=true;
this.isAppointments=false;
this.isDiet=false;
this.isWorkout=false;
}
showDietDetails(){
this.isRemainder=false;
this.isAppointments=false;
this.isDiet=true;
this.isWorkout=false;
}
showWorkoutPlan(){
  this.isWorkout=true;
  this.isRemainder=false;
  this.isAppointments=false;
  this.isDiet=false;
}

}
