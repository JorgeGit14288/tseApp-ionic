
import { Component } from '@angular/core';
import { /*IonicPage,*/Platform, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';
import { SlidesInfoPage } from '../slides-info/slides-info';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform:Platform) {

  }
  consultar(){
    console.log("ir a consultar");
    //this.navCtrl.push(IngresarSolicitudPage)
    this.navCtrl.setRoot(IngresarSolicitudPage);
  }

  //diapositivas de informacion
  verInfo(){
    console.log("Ir a slides-menu");
    this.navCtrl.push(SlidesInfoPage);
  }
salir(){
    console.log("Salir");
  this.platform.exitApp()
  }
}
