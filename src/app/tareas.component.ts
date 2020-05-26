import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'tareas',
  template: `<h1>Listado tareas</h1>
    <mat-card *ngFor="let tarea of webservice.tareas">
    <mat-card-title>{{tarea.usuario}}</mat-card-title>
    <mat-card-content>
    <p>
    {{tarea.trabajo}}
    </p>
  </mat-card-content>
    </mat-card>
    `
})
export class TareasComponent {

  constructor(public webservice: WebService){}

}
