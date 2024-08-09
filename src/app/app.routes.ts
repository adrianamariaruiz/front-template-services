import { Routes } from '@angular/router';
import { TableTemplatesComponent } from './table-templates/table-templates.component';
import { FormComponent } from './form/form.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';

export const routes: Routes = [
  {
    path:'',
    component: FormComponent,
    title: 'Home'
  },
  {
    path: 'templates',
    component: TableTemplatesComponent,
    title: 'templates',
    children: [
      {
        path:'template-details/:id',
        title: 'template-details',
        component: DetailsTemplateComponent
      }
    ]
  }
];
