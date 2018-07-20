import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DirectorioPage } from '../directorio/directorio';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  goNext(){
    this.navCtrl.push(DirectorioPage);
  }
  
}
