import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { TseProvider } from '../../providers/tse/tse';
import { MostrarCapchaPage } from '../mostrar-capcha/mostrar-capcha';
import { FabMenuComponent } from '../../components/fab-menu/fab-menu';




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
export class IngresarSolicitudPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public tseProv: TseProvider
    ,private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarSolicitudPage');
  }
  public solicitud : any ={
    token:"9NM+D34KVLzIwjc2eOCcJ5R/Ooteu3/PjqjFDlfyIfayEH52PHGm8U7JHxk69vVI",
    codSys : "",
    cui: "1957043550101",
    fechaNacimiento: "1962-07-07",
   }

   public respuestaCapcha: any={
    STATUS: "",
    USRMENSAJE: "",
    NTRANS:"",
    IMA:""
  }
  public loader =null;


  logForm(form) {
    if(form.valid){
      console.log(form.value)
    }
    else{
      console.log("No valido");
    }

  }
  onSubmit(form): void{
    if(form.valid){
      this.solicitud.codSys ="ef1b058bc386";
      //iniciamos el loader
        this.loader = this.loadingCtrl.create({
          content: "Cargando",
        });
        this.loader.present();
      this.tseProv.getCapcha(this.solicitud).then(res=>{
        this.respuestaCapcha = res;
        //cerramos el loader
        this.loader.dismiss();
        //enviamos los datos a otra pagina
         if (this.respuestaCapcha.STATUS =="0"){
           let alert = this.alertCtrl.create({
             title: 'Error',
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
      }).catch(err=>{
        this.loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error',
          //subTitle: '10% of battery r',
          message: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }
    else{
      console.log("Formulario no valido");
      let alert = this.alertCtrl.create({
        //title: 'Error',
        //subTitle: '10% of battery r',
        message: "Debe de ingresar la información solicitada",
        buttons: ['Aceptar']
      });
      alert.present();

    }
  }

}
