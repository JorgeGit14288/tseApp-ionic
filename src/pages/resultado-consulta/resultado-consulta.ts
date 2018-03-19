import { HomePage } from './../home/home';
import { PageConfigurations } from './../page_configurations';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, MenuController, AlertController, LoadingController } from 'ionic-angular';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';


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

  constructor( public platform:Platform, public menuController:MenuController, public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,  public loadingCtrl: LoadingController) {
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

  irConsultar(){
    this.navCtrl.setRoot(IngresarSolicitudPage);
  }
  backButtonAction(){
    this.navCtrl.setRoot(IngresarSolicitudPage);
     }
     irHome(){
      this.navCtrl.setRoot(HomePage);
    }
}

