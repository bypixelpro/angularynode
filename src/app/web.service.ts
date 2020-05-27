import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Injectable()

export class WebService {

  APIURL = 'http://localhost:7070/api';

  tareas: any;
  respuesta: any;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.tareas = [];
    this.getTask();
  }

  async getTask() {
    try {
        this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise();
        this.tareas = this.respuesta;
    } catch (error) {
        this.manejadorErrores('No se ha podido obtener tareas');
    }

  }
  async postTask(_tarea) {
    try {
        this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise();
        this.tareas.push(this.respuesta);
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
