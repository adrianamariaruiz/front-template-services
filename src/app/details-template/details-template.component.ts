import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { AsyncPipe } from '@angular/common';
import { firstValueFrom, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-template',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './details-template.component.html',
  styleUrl: './details-template.component.css'
})
export class DetailsTemplateComponent {
  // @Input() id!: String;

  templateSvc = inject(ApiService)
  route = inject(ActivatedRoute)

  templateById$ = this.route.paramMap.pipe(
    switchMap(params => this.templateSvc.getTemplateById(params.get('id')!))
  )


}
