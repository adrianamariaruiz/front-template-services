import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-table-templates',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './table-templates.component.html',
  styleUrl: './table-templates.component.css'
})
export class TableTemplatesComponent {
  title = 'Plantillas de servicio';
  templateSvc = inject(ApiService)
  templatesService$ = this.templateSvc.getAllTemplates()
}
