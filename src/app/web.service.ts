import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Subject } from "rxjs";


@Injectable()

export class WebService {

  APIURL = 'http://localhost:7070/api';

  private tareasDB: any;
  respuesta: any;
  private tareasSujeto = new Subject();

  tareas = this.tareasSujeto.asObservable();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.tareasDB = [];
    this.getTask('');
  }

  getTask(username) {
        username = (username) ? '/' + username : '';
        this.http.get(this.APIURL + '/tareas' + username).subscribe(res => {
        this.tareasDB = res;
        this.tareasSujeto.next(this.tareasDB);
        }, error => {
        this.manejadorErrores('No se ha podido obtener tareas');
    });

  }
  async postTask(_tarea) {
    try {
        this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise();
        this.tareasDB.push(this.respuesta);
    } catch (error) {
      this.manejadorErrores('No se ha podido publicar tareas');
    }
  }

  private manejadorErrores(error) {
    this._snackBar.open(error, 'Cerrar', {
      duration: 2000,
    });
  }
}
