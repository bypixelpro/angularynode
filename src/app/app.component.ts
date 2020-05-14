import { Component } from '@angular/core';
import { TareasComponent } from './tareas.component';


@Component({
  selector: 'app-root',
  template: 'Hola {{title}} <tareas></tareas>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}
