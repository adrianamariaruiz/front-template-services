import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { DataTemplate } from '../model/api.model';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {
  constructor (private fb: FormBuilder){}

  templateSvc = inject(ApiService)

  applyFormTemplate = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    fecha: [new Date()],
    descripcion: ['', [Validators.required]],
    fechaActualizacion: [new Date()]
  })

  get fullName(){
    return this.applyFormTemplate.get('nombre') as FormControl;
  }
  
  get description(){
    return this.applyFormTemplate.get('descripcion') as FormControl;
  }

  submitFormData(){
    if(this.applyFormTemplate.valid){
      console.log(this.applyFormTemplate.value)
      const formData: DataTemplate = {
        nombre: this.applyFormTemplate.value.nombre!,
        fecha: this.applyFormTemplate.value.fecha!,
        descripcion: this.applyFormTemplate.value.descripcion!,
        fechaActualizacion: this.applyFormTemplate.value.fechaActualizacion!
      };
      this.templateSvc.saveTemplate(formData).subscribe(response => {
        console.log('plantilla guardada', response)
        this.applyFormTemplate.reset();
      })
    } else {
      console.log("Formulario incorrecto")
    }
  }

}
