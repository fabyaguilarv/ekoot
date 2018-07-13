import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShareAppPage } from '../share-app/share-app';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the RetosModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retos-modal',
  templateUrl: 'retos-modal.html',
})
export class RetosModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetosModalPage');
  }

  closeModal(){
    this.view.dismiss();
  }

  presentModal() {
    const modal = this.modalCtrl.create(ShareAppPage);
    modal.present();
  }
}
