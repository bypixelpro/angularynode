import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TareasComponent } from './tareas.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';



const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'tareas',
  component: TareasComponent
},
{
  path: 'tareas/:username',
  component: TareasComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
