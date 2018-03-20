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
                //console.log("view: "+view.component.name + " usuario: "+usuario);
                if (this.menuCtrl.isOpen()) {
                    this.menuCtrl.close();
                }
                else if (view.component.name == "HomePage") {
                    this.salir()
                }
                else if (this.navCtrl.canGoBack()) {
                    this.navCtrl.pop();
                } else if (typeof activeView.instance.backButtonAction === 'function') {
                    activeView.instance.backButtonAction();
                } else {
                    this.navCtrl.setRoot(HomePage);
                }

            })
        });
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
