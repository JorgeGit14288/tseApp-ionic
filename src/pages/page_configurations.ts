import { HomePage } from './home/home';

import {
    ViewController,
    MenuController,
    NavController,
    LoadingController,
    AlertController,
    Content,
    Platform,
    IonicApp
} from "ionic-angular";
import { MyApp } from "../app/app.component";
import { OnInit, ViewChild, EventEmitter } from '@angular/core';
import { DecimalPipe } from "@angular/common";


export class PageConfigurations implements OnInit {
    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public loadCtrl: LoadingController,
        public alertCtrl: AlertController,
        public platform: Platform, public ionicApp?: IonicApp,
        public myApp?: MyApp
    ) {
        this.initializeApp();
    }

    ngOnInit(): void {

    }
    initializeApp() {
        this.platform.ready().then(() => {

            this.platform.registerBackButtonAction(() => {
           // get current active page
           let view = this.navCtrl.getActive();
           let activeView: ViewController = this.navCtrl.getActive();
          
               // let isLoading = this.ionicApp._loadingPortal.getActive();
                 if(this.loaders.length > 0){
                    console.log("Se esta cargando el programa", this.loaders.length);
                  }
                else if (this.menuCtrl.isOpen()) {
                    this.menuCtrl.close();
                }
                else if (view.component.name == "HomePage") {
                    this.salir()
                }else if (typeof activeView.instance.backButtonAction === 'function') {
                  activeView.instance.backButtonAction();
              } else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                } else {
                    this.navCtrl.setRoot(HomePage);
                }

            })
        });
    }

    loaderSimple() {
        this.loaderCon("Espera por favor");
      }
    
      public loading: any;
      public loaders: Array<number> = [];
    
      loaderCon(mensaje: string) {
        this.loaders.push(this.loaders.length + 1);
        if (this.loaders.length > 1) {
          return;
        }
    
        this.loading = this.loadCtrl.create({
          content: mensaje,
          //spinner: 'circles'
        });
    
        //this.loading.onDidDismiss(() => {
         // this.loading = null;
       // });
    
        this.loading.present();
      }
    
      dismissLoader() {
        if (this.loading && this.loaders.length == 1){
          this.loading.dismiss();
        }
    
        this.loaders.pop();
      }
    salir() {
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
    irHome(){
        this.navCtrl.setRoot(HomePage);
      }
}
