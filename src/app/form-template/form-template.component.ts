import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CategoriaEnum, DataTemplate, EstadoEnum, EtiquetaEnum } from '../model/DataTemplate.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-template',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent  {

  private readonly _fb = inject(FormBuilder)
  templateSvc = inject(ApiService)

  etiquetas = Object.values(EtiquetaEnum);
  categoria = Object.values(CategoriaEnum);
  estadosActividad = Object.values(EstadoEnum);

  applyFormTemplate = this._fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    fecha: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    autor: ['', [Validators.required]],
    activo: [EstadoEnum.ACTIVO, [Validators.required]],
    categoria: [CategoriaEnum.TIPO_1, [Validators.required]],
    etiquetas: [EtiquetaEnum.PENDIENTE, [Validators.required]]
  })

  get fullName(){
    return this.applyFormTemplate.get('nombre') as FormControl;
  }
  get description(){
    return this.applyFormTemplate.get('descripcion') as FormControl;
  }
  get choseDate(){
    return this.applyFormTemplate.get('fecha') as FormControl;
  }
  get author(){
    return this.applyFormTemplate.get('autor') as FormControl;
  }
  get category(){
    return this.applyFormTemplate.get('autor') as FormControl;
  }
  get target(){
    return this.applyFormTemplate.get('etiquetas') as FormControl;
  }
  get activeState(){
    return this.applyFormTemplate.get('activo') as FormControl;
  }

  submitFormData(){
    if(this.applyFormTemplate.valid){
      console.log(this.applyFormTemplate.value)
      console.log(new Date(this.applyFormTemplate.value.fecha!))
      
      const formData: DataTemplate = {
        nombre: this.applyFormTemplate.value.nombre ?? "",
        fecha: new Date(this.applyFormTemplate.value.fecha!),
        descripcion: this.applyFormTemplate.value.descripcion ?? "",
        autor: this.applyFormTemplate.value.autor ?? "",
        activo: this.applyFormTemplate.value.activo ?? EstadoEnum.ACTIVO,
        categoria: this.applyFormTemplate.value.categoria ?? CategoriaEnum.TIPO_1,
        etiquetas: this.applyFormTemplate.value.etiquetas ?? EtiquetaEnum.PENDIENTE
      };

      this.templateSvc.saveTemplate(formData).subscribe(response => {
        console.log('plantilla guardada', response)
        this.applyFormTemplate.reset();
        Swal.fire({
          title: "Plantilla guardada con exito!",
          showClass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
          },
          hideClass: {
            popup: 'swal2-hide',
            backdrop: 'swal2-backdrop-hide',
          },
        });
      })
    } else {
      console.log("Formulario incorrecto")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo salió mal y no se pudo guardar la plantilla!"
      });
    }
  }

}
