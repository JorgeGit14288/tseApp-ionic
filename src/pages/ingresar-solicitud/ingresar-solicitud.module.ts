import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresarSolicitudPage } from './ingresar-solicitud';

@NgModule({
  declarations: [
    IngresarSolicitudPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresarSolicitudPage),
  ],
})
export class IngresarSolicitudPageModule {}
