import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { ResultadoConsultaPage } from '../resultado-consulta/resultado-consulta';
import { IngresarSolicitudPage } from '../ingresar-solicitud/ingresar-solicitud';


/**
 * Generated class for the MostrarCapchaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'mostrar-capcha-page'
})
@Component({
  selector: 'page-mostrar-capcha',
  templateUrl: 'mostrar-capcha.html',
})
export class MostrarCapchaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private tseProv: TseProvider, private alertCtrl: AlertController,  public loadingCtrl: LoadingController) {
    this.capcha.imagen =navParams.data.capcha.IMA;
    this.capcha.transaccion  =navParams.data.capcha.NTRANS;
    this.base64Image = "data:image/jpeg;base64," + navParams.data.capcha.IMA;

  }
  public loader =null;
  public codigoCap ="";
  base64Image = "";
  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarCapchaPage');
  }
  public capcha: any = {
    codigo: "",
    imagen: "",
    transaccion: ""
  };

  public respuestaCapcha: any={
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
  public validarCapcha :any ={
    token:"9NM+D34KVLzIwjc2eOCcJ5R/Ooteu3/PjqjFDlfyIfayEH52PHGm8U7JHxk69vVI",
    nTransac : "",
    Guid: "",
    Id: ""
  }



  onSubmit():void{


    this.validarCapcha.nTransac = this.capcha.transaccion;
    this.validarCapcha.Id="ef1b058bc386";
    this.validarCapcha.Guid = this.codigoCap;
    this.loader = this.loadingCtrl.create({
      content: "Cargando",
    });
    this.loader.present();
    this.tseProv.validarCapcha(this.validarCapcha).then(res=>{
      this.respuestaCapcha=res;

      this.loader.dismiss();
      if (this.respuestaCapcha.STATUS =="0"){
        let alert = this.alertCtrl.create({
          title: 'Error',
          //subTitle: '10% of battery r',
          message: this.respuestaCapcha.mensaje,
           buttons: [
            {
              text: 'Aceptar',
              handler: () => {

                this.navCtrl.push(IngresarSolicitudPage)

              }
            }
          ]
        });
        alert.present();
      }
      else{
      this.navCtrl.push(ResultadoConsultaPage, {
        'res':this.respuestaCapcha
      })
    }

    }).catch(err=>{
      this.loader.dismiss();

      let alert = this.alertCtrl.create({
        title: 'Error',
        //subTitle: '10% of battery r',
        message: this.respuestaCapcha.mensaje,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

}
