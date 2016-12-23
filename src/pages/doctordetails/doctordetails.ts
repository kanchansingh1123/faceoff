import { Component } from '@angular/core';

import { NavController,NavParams,AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { NotificationPage } from '../notification/notification';
import { SelectLocationPage } from '../selectlocation/selectlocation';
import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-doctor-details',
  templateUrl: 'doctordetails.html'
})
export class DoctorDetailsPage {

	public doctors:any;
	public serviceName: any;
	searchPage: any = SearchPage;
	notificationPage: any = NotificationPage;
	selectLocationPage: any = SelectLocationPage;
  selectOption:any = {"day" : 'Wed, 23 Dec', "time": '11:00 AM - 12:00 PM', "doctorName" : "Dr.Shaw"};
  isTimeSelect:any = false;
  constructor(public navCtrl: NavController,public params: NavParams,public actionSheetCtrl: ActionSheetController,private alertCtrl: AlertController) {
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
   this.isTimeSelect = false;
   let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'M',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 0 );
            this.selectOption.day = "Mon, 23 Dec";
            return false;
          },
          cssClass:'schedule-day-button-enable'
        },
        {
          text: 'T',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 1);
            this.selectOption.day = "Tue, 23 Dec";
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'W',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 2);
            this.selectOption.day = "Wed, 23 Dec";
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'T',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 3);
            this.selectOption.day = "Thu, 23 Dec";
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'F',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 4);
            this.selectOption.day = "Fri, 23 Dec";
            return false;
          },
          cssClass:'schedule-day-button-disable'
        },
        {
          text: 'S',
          handler: () => {
            this.actionSheetCssClass(actionSheet, 5);
            this.selectOption.day = "Sat, 23 Dec";
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
         this.selectOption.time = "11:00 AM - 12:00 PM";
          this.actionSheetBtnCssClass(actionSheet,7);
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '1:00 PM - 2:00 PM',
         handler: () => {
         this.selectOption.time = "1:00 PM - 2:00 PM";
          this.actionSheetBtnCssClass(actionSheet, 8)
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '3:00 PM - 4:00 PM',
         handler: () => {
          this.selectOption.time = "3:00 PM - 4:00 PM";
          this.actionSheetBtnCssClass(actionSheet, 9)
           return false;
         },
         cssClass: "timings-button"
        },
        {
         text: '5:00 PM - 6:00 PM',
         handler: () => {
         this.selectOption.time = "5:00 PM - 6:00 PM";
         this.actionSheetBtnCssClass(actionSheet, 10)
           return false;
         },
         cssClass: "timings-button"
        },
        {
	      text:"BOOK NOW",
        handler: () => {
          if(this.isTimeSelect){
            this.appointment();
            return true;
          }
          else
           return false;
        },
	      cssClass: 'book-now'
	    }
      ]
    });
    actionSheet.present();
  }

  appointment(){
 let alert = this.alertCtrl.create({
    title: '<h6>Your appointment with <a>Dr.Shaw</a> is Scheduled</h6><hr>',
      buttons: [
        {
         text: this.selectOption.day,
         handler: () => {
           return false;
         },
         cssClass:'date-text-button'
        },
        {
         text: this.selectOption.time,
         handler: () => {
           return false;
         },
         cssClass: "timings-text-button"
        },
        {
        text:"Set Remainder",
        handler: () => {
        this.isTimeSelect = false;
          LocalNotifications.schedule({
   text: 'Your Appointment is scheduled with Dr.Shaw at 23-12-2017 11:30',
   at: new Date(new Date().getTime() +2000),
   led: 'FF0000',
   icon:'https://narenbabu434.files.wordpress.com/2016/12/icon.png'
   
});
          return true;
        },
        cssClass: 'set-remainder'
      }
      ]
    });
    alert.present();
  }

  

  actionSheetCssClass(actionSheet, index){
    actionSheet.data.buttons[index].cssClass = 'schedule-day-button-enable';
    for(let i = 0; i < actionSheet.data.buttons.length; i++){
       if(i != index && i <= 5){
         actionSheet.data.buttons[i].cssClass = 'schedule-day-button-disable';
       }
    }
  }
 actionSheetBtnCssClass(actionSheet, index){
      this.isTimeSelect = true;
      actionSheet.data.buttons[index].cssClass = 'timings-button enable-timings-btn';
      actionSheet.data.buttons[11].cssClass = 'book-now enable-timings-btn';
      for(let i = 7; i < actionSheet.data.buttons.length; i++){
         if(i != index && i <= 10){
           actionSheet.data.buttons[i].cssClass = 'timings-button';
         }
      }
 }

}
