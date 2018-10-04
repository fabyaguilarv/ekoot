import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ListsService } from '../../services/lists.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { appendNgContent } from '@angular/core/src/view/ng_content';

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
  secondArr = []
  accion = []
  tituloA = []
  descripcionAccion = []

  value: any;
  valueD: any;
  nombre:any;
  imagen:any;
  descripcion:any;
  paginaWeb:any;
  acciones:[any];

  actionsV: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fdb: AngularFireDatabase,public listsService: ListsService) {


    this.value = navParams.get('pageIndex');
    
    
  this.fdb.list("/lists/").valueChanges().subscribe(_data => {
    this.arrData = _data;

     this.nombre = this.arrData[this.value].name;    
     this.imagen = this.arrData[this.value].img;
     this.descripcion = this.arrData[this.value].description;
     this.paginaWeb = this.arrData[this.value].web;
     this.acciones = this.arrData[this.value].actions;
    
      
  });
  
  this.actionsV = this.value + 1;
  console.log(this.actionsV);

  this.fdb.list("/lists/"+this.actionsV+"/actions").valueChanges().subscribe(_data => {
    this.secondArr = _data;
    
    

  //  for(var i=0;i<this.secondArr.length;i++){
      
  //     this.tituloA.push(this.secondArr[i].titleA);  
  //     this.descripcionAccion.push(this.secondArr[i].descriptionA);


      

  //  }
  //   console.log(this.secondArr);
    
   

 

  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

}
