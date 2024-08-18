import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DataTemplate } from '../model/DataTemplate.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-templates',
  standalone: true,
  imports: [AsyncPipe, RouterLink, DatePipe],
  templateUrl: './table-templates.component.html',
  styleUrl: './table-templates.component.css'
})
export class TableTemplatesComponent {

  title = 'Plantillas de servicio';
  templateAllServices$!: Observable<DataTemplate[]>

  private readonly router = inject(Router)
  private readonly templateSvc = inject(ApiService)

  ngOnInit(){
    this.templateAllServices$ = this.templateSvc.getAllTemplates()
  }

  goToForm(){
    this.router.navigate(['/form-template']);
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
          this.templateAllServices$ = this.templateSvc.getAllTemplates();
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
    console.log("debe abrir modal", id)
    this.router.navigate([`edit-template/${id}`]);
  }

}
