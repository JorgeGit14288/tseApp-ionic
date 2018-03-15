import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarCapchaPage } from './mostrar-capcha';

@NgModule({
  declarations: [
    MostrarCapchaPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarCapchaPage),
  ],
})
export class MostrarCapchaPageModule {}
