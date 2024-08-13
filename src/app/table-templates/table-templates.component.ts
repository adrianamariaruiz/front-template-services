import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-table-templates',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './table-templates.component.html',
  styleUrl: './table-templates.component.css'
})
export class TableTemplatesComponent {
  // @Input('id') templateId!: String;

  constructor(private router: Router) {}

  title = 'Plantillas de servicio';
  templateSvc = inject(ApiService)

  templateAllServices$ = this.templateSvc.getAllTemplates()

  goToForm(){
    this.router.navigate(['/form-template']);
  }

}
