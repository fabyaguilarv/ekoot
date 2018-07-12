import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { RetosModalPage } from '../retos-modal/retos-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) { }

  presentModal() {
    const modal = this.modalCtrl.create(RetosModalPage);
    modal.present();
  }
}
