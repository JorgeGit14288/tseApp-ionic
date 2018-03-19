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


    }

    ngOnInit(): void {

    }
    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.myApp.statusBar.styleDefault();
            this.myApp.splashScreen.hide();

            this.platform.registerBackButtonAction(() => {

                let isLoading = this.ionicApp._loadingPortal.getActive();
                let isOverlay = this.ionicApp._overlayPortal.getActive() || this.ionicApp._modalPortal.getActive();

                if (isLoading) {
                    isLoading.dismiss();
                } else if (isOverlay) {
                    isOverlay.dismiss();
                } else {
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
                    }  else {
                        this.navCtrl.setRoot(HomePage);
                    } 
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
}
