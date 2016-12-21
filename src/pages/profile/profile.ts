import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {  
  btnProfile : boolean = false;
  btnCpassword : boolean = false;
  qLogin : boolean = false;
  public profile:any;
  constructor(public navCtrl: NavController) {
    this.profile = {
      username : "Vidhya Sagar",
      email : "vidhyasagar@gmail.com",
      phone : "",
      bGroup : ""
    }

  }

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }
}
