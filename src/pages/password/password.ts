import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Password page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PasswordPage Page');
  }

}
