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
import { DirectorioPage } from '../pages/directorio/directorio';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ListsService } from '../services/lists.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    SelectCharacterPage,
    HomePage,
    ListPage,
    RetosModalPage,
    ShareAppPage,
    DirectorioPage
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
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
    ShareAppPage,
    DirectorioPage
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListsService
  ]
})
export class AppModule {}
