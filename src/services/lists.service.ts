import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';



@Injectable()
export class ListsService{
    constructor(public afDB: AngularFireDatabase){}
    items = [];

      public getLists(){
        // return this.items;
        return this.afDB.list('lists/').valueChanges();
    }

    public getList(id){
        return this.afDB.object<{id,img,name,web,description}>('lists/'+id).valueChanges();
    }

    
}
