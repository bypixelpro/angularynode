import { Component,ViewChild } from '@angular/core';
import { TareasComponent } from './tareas.component';
import { NuevaTareaComponent } from './nueva-tarea.component';



@Component({
  selector: 'app-root',
  template: '<nueva-tarea (nuevaTarea)="nTarea($event)"></nueva-tarea><tareas></tareas>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TareasComponent) tareas : TareasComponent;

  nTarea(tarea){
    this.tareas.tareas.push(tarea);

  }
}
