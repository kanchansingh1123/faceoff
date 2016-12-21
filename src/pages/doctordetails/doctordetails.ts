import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-doctor-details',
  templateUrl: 'doctordetails.html'
})
export class DoctorDetailsPage {

	public doctors:any;
	public serviceName: any;
	searchPage: any = SearchPage;
	notificationPage: any = NotificationPage;
  constructor(public navCtrl: NavController,public params: NavParams,public actionSheetCtrl: ActionSheetController) {
  	this.serviceName = this.params.get('serviceName');
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


  };

   bookNow(){
   let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'M',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 0 );
            return false;
          },
          cssClass:'schedule-day-button-enable'
        },
        {
          text: 'T',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 1);
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'W',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 2);
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'T',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 3);
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'F',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 4);
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'S',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 5);
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
         text: '23 Dec',
         handler: () => {
           return false;
         },
         cssClass:'date-button'
        },
        {
         text: '11:00 AM - 12:00 PM',
         handler: () => {
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '1:00 PM - 2:00 PM',
         handler: () => {
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '3:00 PM - 4:00 PM',
         handler: () => {
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '5:00 PM - 6:00 PM',
         handler: () => {
           return false;
         },
         cssClass: "timings-button"
        },
        {
	      text:"BOOK NOW",
        handler: () => {
          return true;
        },
	      cssClass: 'book-now'
	    }
      ]
    });
    actionSheet.present();
  }

  actionSheetCssClass(actionSheet, index){
    actionSheet.data.buttons[index].cssClass = 'schedule-day-button-enable';
    for(let i = 0; i < actionSheet.data.buttons.length; i++){
       if(i != index && i <= 5){
         actionSheet.data.buttons[i].cssClass = 'schedule-day-button-disable';
       }
    }
  }

}
