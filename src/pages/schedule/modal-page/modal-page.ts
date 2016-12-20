import { Component } from '@angular/core';

import { NavController, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal-page.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController,private viewCtrl: ViewController) {

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
