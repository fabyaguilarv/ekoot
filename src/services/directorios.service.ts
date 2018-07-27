import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database/database';



@Injectable()
export class DirectoriosService{
    constructor(public afDB: AngularFireDatabase){}
    items = [];

      public getDirectorios(){
        return this.afDB.list('lists/').valueChanges();
    }

    public getDirectorio(id){
        return this.afDB.object<{id,img,name,web,description}>('lists/'+id).valueChanges();
    }
}