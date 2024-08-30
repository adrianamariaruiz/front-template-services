import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RolesEnum } from '../../../model/User.model';
// import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private readonly _fb = inject(FormBuilder)
  // private readonly templateSvc = inject(ApiService)

  loginForm!: FormGroup;
  usuario = Object.values(RolesEnum);

  public applyLoginForm(){
    this.loginForm = this._fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get fullName(){return this.loginForm.get('nombre') as FormControl};
  get email(){return this.loginForm.get('email') as FormControl};
  get password(){return this.loginForm.get('password') as FormControl};

  ngOnInit() {
    this.applyLoginForm();
  }

  submitApplication(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      
    } else {
      console.log("Formulario incorrecto")
    }
  }

}
