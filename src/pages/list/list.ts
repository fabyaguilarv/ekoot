import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DirectorioPage } from '../directorio/directorio';
import { ListsService } from '../../services/lists.service';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {


 items = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public listsService: ListsService) {
    listsService.getLists()
    .subscribe(lists => {
      this.items = lists;
    });
    
    

    
  }


  goNext(){
    this.navCtrl.push(DirectorioPage);
  }
  
}
