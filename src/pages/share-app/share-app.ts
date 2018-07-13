import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the ShareAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-app',
  templateUrl: 'share-app.html',
})
export class ShareAppPage {

  message:string = null;
  file:string=null;
  link:string=null;
  subject:string=null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing, private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareAppPage');
  }

  share(){
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
    .then(()=>{

    }).catch(() =>{

    });
  }
  closeModal(){
    this.view.dismiss();
  }

}
