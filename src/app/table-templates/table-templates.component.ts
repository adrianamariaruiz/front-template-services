import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table-templates',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './table-templates.component.html',
  styleUrl: './table-templates.component.css'
})
export class TableTemplatesComponent {
  // @Input('id') templateId!: String;

  title = 'Plantillas de servicio';
  templateSvc = inject(ApiService)
  templateAllServices$ = this.templateSvc.getAllTemplates()
  // templateById$ = this.templateSvc.getTemplateById('id')

}
