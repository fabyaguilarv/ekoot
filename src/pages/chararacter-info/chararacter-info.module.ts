import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChararacterInfoPage } from './chararacter-info';

@NgModule({
  declarations: [
    ChararacterInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChararacterInfoPage),
  ],
})
export class ChararacterInfoPageModule {}
