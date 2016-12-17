import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  loginPage: any = LoginPage;
  showPassword: boolean = true;
  passwordType: string = "password";

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {}

}
