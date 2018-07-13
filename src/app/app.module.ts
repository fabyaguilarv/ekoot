import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SelectCharacterPage } from '../pages/select-character/select-character'; 
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RetosModalPage } from '../pages/retos-modal/retos-modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ShareAppPage } from '../pages/share-app/share-app';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    SelectCharacterPage,
    HomePage,
    ListPage,
    RetosModalPage,
    ShareAppPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    SelectCharacterPage,
    HomePage,
    ListPage,
    RetosModalPage,
    ShareAppPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
