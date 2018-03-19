import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform, MenuController } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';
import { SlidesInfoPage } from '../slides-info/slides-info';
import { PageConfigurations } from '../page_configurations';


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
export class HomePage extends PageConfigurations  {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform:Platform, public menuController:MenuController) {
      super(navCtrl,menuController , loadingCtrl, alertCtrl, platform);
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

}

