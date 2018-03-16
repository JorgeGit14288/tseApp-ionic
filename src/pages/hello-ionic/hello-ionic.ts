
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }
  consultar(){
    console.log("ir a consultar");
    //this.navCtrl.push(IngresarSolicitudPage)
    this.navCtrl.setRoot(IngresarSolicitudPage);
  }
}
