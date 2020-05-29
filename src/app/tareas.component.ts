import { Component } from '@angular/core';
import { WebService } from './web.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'tareas',
  template: `<h1>Listado tareas</h1>
    <mat-card *ngFor="let tarea of tareasLista">
    <mat-card-title [routerLink]="['/tareas', tarea.usuario]">{{tarea.usuario}}</mat-card-title>
    <mat-card-content>
    <p>
    {{tarea.trabajo}}
    </p>
  </mat-card-content>
    </mat-card>
    `
})
export class TareasComponent {
  username: any;
  tareasLista: any;

  constructor(private webservice: WebService, private rutaActiva: ActivatedRoute){}

  ngOnInit(): void {

    this.username = (this.rutaActiva.snapshot.params.username);
    this.webservice.getTask(this.username);
    this.webservice.tareasSujeto.subscribe(tareas =>{
      this.tareasLista = tareas;
    });

  }

}
