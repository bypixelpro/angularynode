import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
  styles: [`
   .error{
     background-color: #ff4081;
   }
  `]
})
export class RegisterComponent {
  form: any;
  constructor(private fb: FormBuilder){
    this.form = fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.form.value);
  }

  isValid(control){
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

}
