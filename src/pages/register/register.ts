import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HomePage } from '../home/home';
//import { SelectCharacterPage } from '../select-character/select-character';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;
  password:string;
  repassword:string;

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User){

    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
    console.log(result);
  }
  catch(e){
    console.error(e);
  }
    /*if(this.email.length== 0 || this.password.length== 0 || this.repassword.length== 0){
      alert("Please fill all fields.");
    }else{
      this.navCtrl.push(SelectCharacterPage);
    }*/
  }

}
