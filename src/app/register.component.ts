import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  form: any;
  constructor(private fb: FormBuilder){
    this.form = fb.group({
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      cpassword: ''
    });
  }

  onSubmit(){
    console.log(this.form.value);
  }

}
