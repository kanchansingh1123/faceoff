import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  passwordType: string = "password"
  showPassword: boolean = true;
  forgotPassword: any = PasswordPage;
  registerPage: any = RegisterPage;
  
  constructor(public navCtrl: NavController) {}

  doLogin(){
    this.navCtrl.setRoot(TabsPage)
  }
}
