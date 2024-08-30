import { Component, inject, OnInit } from '@angular/core';

import { AsyncPipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../../../shared/services/api.service';
import { DataTemplate } from '../../../model/DataTemplate.model';


@Component({
  selector: 'app-templates-page',
  standalone: true,
  imports: [AsyncPipe, RouterLink, DatePipe],
  templateUrl: './templates-page.component.html',
  styleUrl: './templates-page.component.css'
})
export class TemplatesPageComponent implements OnInit {

  title = 'Plantillas de servicio';
  templates: DataTemplate[] = [];
  filteredTemplates: DataTemplate[] = [];

  private readonly router = inject(Router)
  private readonly templateSvc = inject(ApiService)

  ngOnInit(){
    this.loadTemplates();
  }

  loadTemplates() {
    this.templateSvc.getAllTemplates().subscribe({
      next: (data) => {
        this.templates = data;
        this.filteredTemplates = data;
      },
      error: (error) => {
        console.error("Error al cargar las plantillas", error);
      }
    });
  }

  resultFilter(text: string){
    this.filteredTemplates = this.templates.filter(template => {
      const findName = template.nombre.toLowerCase().includes(text.toLowerCase());
      const findDescription = template.descripcion.toLowerCase().includes(text.toLowerCase());
      const findAuthor = template.autor.toLowerCase().includes(text.toLowerCase());
      const findCategory = template.categoria.toLowerCase().includes(text.toLowerCase());
      

      return findName || findDescription || findAuthor || findCategory;
    })
  }

  goToForm(){
    this.router.navigate(['templates/form-template']);
  }

  onDeleteTemplate(id: string){
    this.templateSvc.deleteTemplate(id).subscribe({
      next: (response) => {
          console.log("Plantilla eliminada correctamente", response);
          Swal.fire({
            title: "Está seguro de que desea eliminar esta plantilla?",
            text: "No podrá deshacer los cambios!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "var(--green-principal)",
            cancelButtonColor: "var(--delete-red)",
            confirmButtonText: "Si, eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Eliminado!",
                text: "La plantilla fue eliminada.",
                icon: "success"
              });
            }
          });
          this.loadTemplates();
      },
      error: error => {
        console.error("Error al eliminar la plantilla", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal y no se pudo eliminar la plantilla!"
        });
      }
    }
    )
  }

  onUpdateTemplate(id: string){
    this.router.navigate([`templates/edit-template/${id}`]);
  }

}


// applyFilters() {
//   this.filteredTemplates = this.templates.filter(template => {
//     const matchesNombre = template.nombre.toLowerCase().includes(this.filters.nombre.toLowerCase());
//     const matchesDescripcion = template.descripcion.toLowerCase().includes(this.filters.descripcion.toLowerCase());
//     const matchesAutor = template.autor.toLowerCase().includes(this.filters.autor.toLowerCase());
//     const matchesCategoria = template.categoria.toLowerCase().includes(this.filters.categoria.toLowerCase());
//     const matchesFechaInicio = this.filters.fechaInicio ? new Date(template.fecha) >= new Date(this.filters.fechaInicio) : true;
//     const matchesFechaFin = this.filters.fechaFin ? new Date(template.fecha) <= new Date(this.filters.fechaFin) : true;

//     return matchesNombre && matchesDescripcion && matchesAutor && matchesCategoria && matchesFechaInicio && matchesFechaFin;
//   });
// }