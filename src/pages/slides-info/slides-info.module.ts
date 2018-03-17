import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidesInfoPage } from './slides-info';

@NgModule({
  declarations: [
    SlidesInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidesInfoPage),
  ],
})
export class SlidesInfoPageModule {}
