import { Injectable } from '@angular/core';
import { b } from '../../b';
import { HttpProvider } from '../http/http';

/*
  Generated class for the TseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TseProvider {


  constructor( public httpProvider: HttpProvider) {
    console.log('Hello TseProvider Provider');
  }


  getCapcha(solicitud) {
    console.log("Endpoint traido de el archivo v"+ b.API_ENDPOINT );
    return new Promise((resolve, reject)=>{
        this.httpProvider.post(b.API_ENDPOINT+'/getCapcha',solicitud).then(res=>{
          resolve(res);
        }, err=>{
          reject(err)
        })
    })
  }
  validarCapcha(data){
    return new Promise((resolve, reject)=>{
      this.httpProvider.post(b.API_ENDPOINT+'/obtenerLugar',data).then(res=>{
        resolve(res);
      }, err=>{
        reject(err)
      })
  }) 
  }
}
