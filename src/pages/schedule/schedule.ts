import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController , ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page/modal-page';


@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public modalCtrl: ModalController) {

  }
  showRemainderPopup() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
}

}
