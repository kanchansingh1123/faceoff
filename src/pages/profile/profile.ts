import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuickLoginPage } from '../quicklogin/quicklogin';
import { LoginPage } from '../login/login';

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
  public qPassword:string;
  constructor(public navCtrl: NavController) {
    this.profile = {
      username : "Vidhya Sagar",
      email : "vidhyasagar@gmail.com",
      phone : "",
      bGroup : ""
    }

  }

  ionViewDidLoad() {
    this.qPassword=localStorage.getItem("Name");
  }
  doLogout(){
  if(this.qPassword != null && this.qPassword != undefined && this.qPassword != "")
    this.navCtrl.setRoot(QuickLoginPage);
  else
      this.navCtrl.setRoot(LoginPage);
  }

  setQuickLogin(){
    localStorage.setItem("Name", this.qPassword);
  }
}
