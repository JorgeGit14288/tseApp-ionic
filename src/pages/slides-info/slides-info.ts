import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';

/**
 * Generated class for the SlidesInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slides-info',
  templateUrl: 'slides-info.html',
})
export class SlidesInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidesInfoPage');
  }
  ultimoSlide(){
    console.log("Ultima diapositiva");
    this.navCtrl.setRoot(IngresarSolicitudPage);
  }

}
