import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { b } from '../../b';
import 'rxjs/add/operator/timeout';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      timeout: '${20000}'
    })
  };

  post( endpoint: string, parametros: any, timeout: number = 180000) {
    //console.log("Estoy en post del http provider");
    //console.log("endpoint", endpoint);
    console.log("Enviado", parametros);
    return new Promise((resolve, reject) => {
      this.http.post(endpoint, parametros, this.httpOptions)
        .timeout(timeout)
        .subscribe(res => {
          console.log("Respuesta",res);
          resolve(res);
        },(err) => {
        err.message ="Lo sentimos, ocurrio un error de conexión con el servidor";
          reject(err);
        });
    });

  }
}
