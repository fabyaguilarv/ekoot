import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectCharacterPage } from './select-character';

@NgModule({
  declarations: [
    SelectCharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectCharacterPage),
  ],
})
export class SelectCharacterPageModule {}
