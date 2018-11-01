import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { ChararacterInfoPage } from '../chararacter-info/chararacter-info';
/**
 * Generated class for the SelectCharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-character',
  templateUrl: 'select-character.html',
})
export class SelectCharacterPage {

  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCharacterPage');
  }

  goNext(){
    this.navCtrl.push(ChararacterInfoPage);
  }
 /* goHome(){
    this.navCtrl.setRoot(HomePage);
  }*/

}
