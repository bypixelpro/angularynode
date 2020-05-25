import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {

  APIURL = 'http://localhost:7070/api';

  constructor(private http: HttpClient){}

  getTask(){
    return this.http.get(this.APIURL + '/tareas').toPromise();
  }
  postTask(_tarea){
    return this.http.post(this.APIURL + '/tarea', _tarea).toPromise();
  }
}
