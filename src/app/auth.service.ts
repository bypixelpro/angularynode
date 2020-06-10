import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()

export class AuthService {

  APIURL = 'http://localhost:7070/auth';


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  register(user) {
        this.http.post(this.APIURL + '/register', user).subscribe(res => {
        }, error => {
        this.manejadorErrores('No se ha podido registrar al usuario');
    });

  }


  private manejadorErrores(error) {
    this._snackBar.open(error, 'Cerrar', {
      duration: 2000,
    });
  }
}
