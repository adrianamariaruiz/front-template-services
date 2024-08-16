import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { CategoriaEnum, EstadoEnum, EtiquetaEnum } from '../model/DataTemplate.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, AsyncPipe],
  providers: [DatePipe],
  templateUrl: './EditForm.component.html',
  styleUrl: './EditForm.component.css'
})
export class EditFormComponent implements OnInit{

  private readonly _fb = inject(FormBuilder)
  private readonly datePipe = inject(DatePipe)
  private readonly templateSvc = inject(ApiService)
  private readonly route = inject(ActivatedRoute)

  editForm!: FormGroup

  templateById$ = this.route.paramMap.pipe(
    switchMap(params => this.templateSvc.getTemplateById(params.get('id')!))
  )

  etiquetas = Object.values(EtiquetaEnum);
  categoria = Object.values(CategoriaEnum);
  activesState = Object.values(EstadoEnum);

  public applyForm(){
    this.editForm = this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      fecha: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      autor: ['', [Validators.required]],
      activo: [EstadoEnum.ACTIVO, [Validators.required]],
      categoria: [CategoriaEnum.TIPO_1, [Validators.required]],
      etiquetas: [EtiquetaEnum.PENDIENTE, [Validators.required]]
    })
  } 

  ngOnInit(){
    this.applyForm();
    this.loadTemplateById();
  }

    private loadTemplateById(){
    this.route.paramMap.pipe(
     switchMap(params => this.templateSvc.getTemplateById(params.get('id')!))
   ).subscribe(template => {
      this.editForm.patchValue({
        nombre: template.nombre,
        fecha: this.datePipe.transform(template.fecha, 'yyyy-MM-dd'),
        descripcion: template.descripcion,
        autor: template.autor,
        categoria: template.categoria,
        activo: template.activo,
        etiquetas: template.etiquetas
      })
   })
  }
  
  submitForm(){
    if(this.editForm.valid){
      const id = this.route.snapshot.paramMap.get('id')!;
      const updatedTemplate = this.editForm.value;
      updatedTemplate.fecha = new Date(updatedTemplate.fecha);
      
      this.templateSvc.updateTemplate(id, updatedTemplate).subscribe({
        next: (response)=> {
          console.log('actualizada', response)
          this.editForm.reset();
        },
        error: (err)=>{
          console.log('error', err)
        }
      })
    } else {
      console.log("Formulario incorrecto")
    }
  }
}