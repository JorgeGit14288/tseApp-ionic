import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { TseProvider } from '../providers/tse/tse';
import { IngresarSolicitudPageModule } from '../pages/ingresar-solicitud/ingresar-solicitud.module';
import { ResultadoConsultaPageModule } from '../pages/resultado-consulta/resultado-consulta.module';
import { MostrarCapchaPageModule } from '../pages/mostrar-capcha/mostrar-capcha.module';
import { SlidesInfoPageModule } from '../pages/slides-info/slides-info.module';
import { HomePageModule } from '../pages/home/home.module';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { Screenshot } from '@ionic-native/screenshot';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IngresarSolicitudPageModule,
    ResultadoConsultaPageModule,
    MostrarCapchaPageModule,
    SlidesInfoPageModule,
    HomePageModule,
    FormsModule,
    CustomFormsModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    TseProvider
  ]
})
export class AppModule {}
