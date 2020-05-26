import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {

  APIURL = 'http://localhost:7070/api';

  tareas: any;
  respuesta: any;

  constructor(private http: HttpClient) {
    this.tareas = [];
    this.getTask();
  }

  async getTask() {
    this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise();
    this.tareas = this.respuesta;
  }
  async postTask(_tarea) {
    this.respuesta = await this.http.post(this.APIURL + '/tarea', _tarea).toPromise();
    this.tareas.push(this.respuesta);
  }
}
