import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { App, ViewController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  username:string;
  password:string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,  public viewCtrl: ViewController, public appCtrl: App) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){
    console.log("Username: "+ this.username);

    console.log("Password: "+ this.password);
    
    if(this.username.length == 0 || this.password.length == 0){
      alert("Please fill all fields.");
    }else{
      this.navCtrl.setRoot(HomePage);

    }
    
  }
  
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
