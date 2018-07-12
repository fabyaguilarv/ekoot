import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetosModalPage } from './retos-modal';

@NgModule({
  declarations: [
    RetosModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RetosModalPage),
  ],
})
export class RetosModalPageModule {}
