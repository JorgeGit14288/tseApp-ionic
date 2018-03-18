import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';
import { SlidesInfoPage } from '../slides-info/slides-info';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform:Platform) {
      let backAction =  platform.registerBackButtonAction(() => {
        console.log("se ha presionado el boon atras");
        this.salir();
        backAction();
      },2)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
    let alert = this.alertCtrl.create({
      // title: 'Error',
       //subTitle: '10% of battery r',
       message: "Gracias por utilizar nuestro servicio",
       buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.platform.exitApp()
          }
        }
      ]
     });
     alert.present();
  }
}

