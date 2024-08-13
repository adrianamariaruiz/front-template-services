import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor (private fb: FormBuilder){

  }

  applyForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  // applyForm = new FormGroup({
  //   fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
  // })

  get fullName(){
    return this.applyForm.get('fullName') as FormControl;
  }
  get email(){
    return this.applyForm.get('email') as FormControl;
  }
  get password(){
    return this.applyForm.get('password') as FormControl;
  }

  submitApplication(){
    if(this.applyForm.valid){
      console.log(this.applyForm.value)
      this.applyForm.reset();
    } else {
      console.log("Formulario incorrecto")
    }
  }
}
