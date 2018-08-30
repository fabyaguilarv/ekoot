import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ListsService } from '../../services/lists.service';

import { AngularFireDatabase } from 'angularfire2/database';

//import { ListPage } from '../list/list';
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
  
  arrData = []

  value: any;
  
  nombre:any;
  imagen:any;
  descripcion:any;
  paginaWeb:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase,public listsService: ListsService) {

    // listsService.getLists()
    // .subscribe(lists => {
    //   this.arrData = lists;

    //   console.log(this.arrData);
      
    //   for (var i = 0; i <= this.arrData.length; i++){
    //     console.log(this.arrData[i].name);
    // }


    // });
  
    // console.log("HOLA");
    // console.log(this.navParams.data);

    this.value = navParams.get('pageIndex');
    
  this.fdb.list("/lists/").valueChanges().subscribe(_data => {
    this.arrData = _data;

     this.nombre = this.arrData[this.value].name;    
     this.imagen = this.arrData[this.value].img;
     this.descripcion = this.arrData[this.value].description;
     this.paginaWeb = this.arrData[this.value].web;


    

  });


  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

}
