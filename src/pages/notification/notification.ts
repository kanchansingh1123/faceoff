import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {
public doctors:any;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
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

  rateNow(){
 	  let alert = this.alertCtrl.create({
    title: '<h4 style="text-align: center;">Please rate your Experience with <a>Dr.Shaw</a></h4><hr>',
      buttons: [
        {
	         text: "1",
	         handler: () => {
	           this.ratingRange(alert,  0);
	           return false;
	         },
	         cssClass:'ratenow1'
        },
        {
	         text: 2,
	         handler: () => {
	         
	         this.ratingRange(alert,  1);
	         console.log(alert);
	           return false;
	         },
	         cssClass:'ratenow2'
        },
        {
	        text:3,
	        handler: () => {
	          this.ratingRange(alert,  2);
	          return false;
	        },
	        cssClass:'ratenow3'
      	},
      	{
	        text:4,
	        handler: () => {
	          this.ratingRange(alert,  3);
	          return false;
	        },
	        cssClass:'ratenow4'
      	},
      	{
	        text:5,
	        handler: () => {
	          this.ratingRange(alert,  4);
	          return false;
	        },
	        cssClass:'ratenow5'
      	},
      	{
	        text:"Submit",
	        handler: () => {
	          this.thanksAlert();
	          return true;
	        },
	        cssClass:'ratenow-submit'
      	},
      	{
	        text:"Not now",
	        handler: () => {
	          return true;
	        },
	        cssClass:'ratenow-not'
      	}
      ]
    });
    alert.present();
  }
  
   ratingRange(alert,  index){
     for(let i = 0 ; i < 5; i++ ){
                 let count = i+1;
                 if(i <= index){
                   alert.data.buttons[i].text="";
	               alert.data.buttons[i].cssClass = "ratenow"+count + " heartbeatrate hartwidth";
                 }
                 else{
                   alert.data.buttons[i].text= i+1;
	               alert.data.buttons[i].cssClass ="ratenow"+count;
                 }
	         }
   }

  thanksAlert() {
    let alert = this.alertCtrl.create({
      title: '<h4>Thanks for your Feedback.</h4>',
      buttons: [
      	{
      	  text: 'ok',
          handler: () => {
            return true;
          },
          cssClass:'set-thanks-btn'
      	}
      ]
    });
    alert.present();
  }

}
