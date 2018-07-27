import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListsService } from '../../services/lists.service';
/**
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {
  
  directorio = {id:null,img:null,name:null,web:null, description:null};
  id=null;
  

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public listsService: ListsService ) {
   this.id = navParams.get('id');
   if(this.id != 0){
     listsService.getList(this.id)
     .subscribe(directorio => {
      this.directorio = directorio;
     });
   }

  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

}
