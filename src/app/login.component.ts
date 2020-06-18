import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  template: `
  <mat-card>
  <form>
    <mat-card-title>acceso miembros</mat-card-title>
        <mat-form-field class="example-full-width">
          <mat-label>Email:</mat-label>
          <input [(ngModel)]="logindata.email" matInput placeholder="Email" name="email">
        </mat-form-field>

        <mat-form-field class="example-full-width">
          <mat-label>Password:</mat-label>
          <input type="password" [(ngModel)]="logindata.password" matInput placeholder="Password" name="email">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="login()">Enviar</button>
    </form>
  </mat-card>
    `
})
export class LoginComponent {

  constructor(private auth: AuthService){}

  logindata = {
    email: '',
    password: ''
  }

  login(){
    console.log(this.logindata);
  }

}
