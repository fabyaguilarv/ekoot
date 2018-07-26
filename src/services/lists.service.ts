import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';



@Injectable()
export class ListsService{
    constructor(public afDB: AngularFireDatabase){}
    items = [
        // {id:1, img: 'assets/imgs/saigon.jpg'},
        // {id:2, img: 'assets/imgs/butcher.jpg'}   
      ];

      public getLists(){
        // return this.items;
        return this.afDB.list('lists/').valueChanges();
    }

    public getList(id){
        //return this.items.filter(function(e,i){ return e.id == id})[0] || {id:null, img:null}
        return this.afDB.object('lists/'+id).valueChanges();
    }
}
