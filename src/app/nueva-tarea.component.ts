import { Component } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'nueva-tarea',
  template: `
    <mat-card>
    <mat-card-title>Añadir tarea</mat-card-title>
        <form class="example-form">
        <mat-form-field class="example-full-width">
        <mat-label>Nombre usuario:</mat-label>
        <input matInput placeholder="username">
        </mat-form-field>
    
        <mat-form-field class="example-full-width">
        <mat-label>Tarea:</mat-label>
        <textarea matInput placeholder="Introduzca aquí su tarea..."></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary">Enviar</button>
    </form>
    </mat-card>
    `
})
export class NuevaTareaComponent {

  constructor(private webservice: WebService){}

}
