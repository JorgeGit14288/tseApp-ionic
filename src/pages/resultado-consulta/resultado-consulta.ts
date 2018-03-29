import { HomePage } from './../home/home';
import { PageConfigurations } from './../page_configurations';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';

import { Screenshot } from '@ionic-native/screenshot';


/**
 * Generated class for the ResultadoConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultado-consulta',
  templateUrl: 'resultado-consulta.html',
})
export class ResultadoConsultaPage extends PageConfigurations {
  screen: any;
  state: boolean = false;
  constructor( public platform:Platform, public menuController:MenuController, public navCtrl: NavController,
    public navParams: NavParams,  public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, private screenshot: Screenshot) {
    super(navCtrl, menuController , loadingCtrl, alertCtrl, platform);
    this.datosVotacion = navParams.data.res;
  }

  public datosVotacion2: any ={
    boleta :"",
    dpi :"",
    nombre :"",
    fechaNacimiento :"",
    numeroMesa :"",
    pagina :"",
    linea :"",
    centro :"",
    direccion :"",
    departamento :"",
    municipio :"",
  }
  public datosVotacion : any ={
    BOLETA:"",
    CENTRO:"",
    CODIGO:"",
    DEPARTAMENTO:"",
    DETMENSAJE:"",
    DIRECCION:"",
    DPI:"",
    FECHA_DE_NACIMIENTO:"",
    LINEA:"",
    MESA_DE_NUMERO:"",
    MUNICIPIO:"",
    NOMBRES_APELLIDOS:"",
    PAGINA:"",
    STATUS:"",
    USRMENSAJE:"",
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoConsultaPage');
  }
   // Reset function we will use to hide the screenshot preview after 1 second
   reset() {
    var self = this;
    setTimeout(function(){
      self.state = false;
    }, 2000);
    let alert = this.alertCtrl.create({
      // title: 'Error',
      //subTitle: '10% of battery r',
      message: "Se ha guardado la informacion de su lugar de votación, en sus imagenes",
      buttons: [
          {
              text: 'Aceptar',
              handler: () => {
                alert.dismiss();
              }
          }
      ]
  });
  alert.present();
  }

  screenShot() {
    this.screenshot.save('jpg', 80, 'TSE-LUGAR DE VOTACION-'+this.datosVotacion.DPI+'.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }

  irConsultar(){
    this.navCtrl.setRoot(IngresarSolicitudPage);
  }
  backButtonAction(){
    this.navCtrl.setRoot(IngresarSolicitudPage);
     }
  }
