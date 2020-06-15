import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()

export class AuthService {

  APIURL = 'http://localhost:7070/auth';


  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  register(user) {
        delete user.cpassword;
        this.http.post(this.APIURL + '/register', user).subscribe(res => {
          localStorage.setItem('token', res.toString());
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
