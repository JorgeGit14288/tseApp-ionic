import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform, MenuController } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { MostrarCapchaPage } from '../mostrar-capcha/mostrar-capcha';
import { HomePage } from '../home/home';
import { PageConfigurations } from '../page_configurations';


/**
 * Generated class for the IngresarSolicitudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresar-solicitud',
  templateUrl: 'ingresar-solicitud.html',
})
export class IngresarSolicitudPage extends PageConfigurations {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tseProv: TseProvider
    , public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform: Platform, public menuController: MenuController) {

    super(navCtrl, menuController, loadingCtrl, alertCtrl, platform);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarSolicitudPage');
  }
  public solicitud: any = {
    token: "9NM+D34KVLzIwjc2eOCcJ5R/Ooteu3/PjqjFDlfyIfayEH52PHGm8U7JHxk69vVI",
    codSys: "",
    cui: "1750927530901",
    fechaNacimiento: "1988-02-14",
    //cui: "",
    //fechaNacimiento: "",
  }

  public respuestaCapcha: any = {
    STATUS: "",
    USRMENSAJE: "",
    NTRANS: "",
    IMA: ""
  }
  public loader = null;

  logForm(form) {
    if (form.valid) {
      console.log(form.value)
    }
    else {
      console.log("No valido");
    }

  }
  onSubmit(): void {

    this.solicitud.codSys = "ef1b058bc386";
    //iniciamos el loader
    this.loader = this.loadingCtrl.create({
      content: "Cargando",
    });
    this.loader.present();
    this.tseProv.getCapcha(this.solicitud).then(res => {
      this.respuestaCapcha = res;
      //cerramos el loader
      this.loader.dismiss();
      //enviamos los datos a otra pagina
      if (this.respuestaCapcha.STATUS == "0") {
        let alert = this.alertCtrl.create({
          // title: 'Error',
          //subTitle: '10% of battery r',
          message: this.respuestaCapcha.USRMENSAJE,
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
      else {
        this.navCtrl.push(MostrarCapchaPage, {
          'capcha': this.respuestaCapcha
        })
      }
    }).catch(err => {
      this.loader.dismiss();
      let alert = this.alertCtrl.create({
        // title: 'Error',
        //subTitle: '10% of battery r',
        message: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }
  backButtonAction() {
    this.navCtrl.setRoot(HomePage);
  }
}
