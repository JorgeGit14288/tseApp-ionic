
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
    constructor(public navCtrl: NavController,
        public menuCtrl: MenuController,
        public loadCtrl: LoadingController,
        public alertCtrl: AlertController,
        public platform: Platform, public ionicApp: IonicApp,
        public myApp: MyApp, public decimalpipe?: DecimalPipe,
      ) {


    }

    ngOnInit(): void {

    }
    initializeApp() {
        this.myApp.platform.ready().then(() => {
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
                    // console.log("SI hay login " + view.component.name +"<>");
                    else if (view.component.name == "HomePage") {//si esta en home preguntar si queire salir??
                        //this.myApp.logout();
                    }
                    else if (this.navCtrl.canGoBack()) {
                        this.navCtrl.pop();
                    } else if (typeof activeView.instance.backButtonAction === 'function') {
                        activeView.instance.backButtonAction();
                    } else if (view.component.name == "HomePage") { //si esta en login exit.app
                        //this.myApp.logout();
                    } else {
                        this.myApp.nav.setRoot("HomePage");
                    } // goes to the first tab
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
