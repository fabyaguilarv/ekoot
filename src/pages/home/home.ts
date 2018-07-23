import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { RetosModalPage } from '../retos-modal/retos-modal';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth,private toast: ToastController,
    public navCtrl: NavController, private modalCtrl: ModalController) { }

  ionViewWillLoad(){

    this.afAuth.authState.subscribe(data => {
     if(data && data.email && data.uid){

      this.toast.create({
        message: 'Bienvenido a Ekoot',
        duration: 3000
      }).present();

    } else{
      this.toast.create({
        message: 'Could not find authentication details.',
        duration: 3000
      }).present();
    }
    });

  
  }

  presentModal() {
    const modal = this.modalCtrl.create(RetosModalPage);
    modal.present();
  }
}
