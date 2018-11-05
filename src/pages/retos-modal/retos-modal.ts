import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShareAppPage } from '../share-app/share-app';
import { ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
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

  message:string = "¡Hola!, te invito a desargar la aplicación de ekoot. \nwww.ekoot.mx";
  link:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modalCtrl: ModalController, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetosModalPage');
  }

  share(){
    this.socialSharing.share(this.message, this.link)
    .then(()=>{

    }).catch(() =>{

    });
  }

  closeModal(){
    this.view.dismiss();
  }

  presentModal() {
    const modal = this.modalCtrl.create(ShareAppPage);
    modal.present();
  }
}
