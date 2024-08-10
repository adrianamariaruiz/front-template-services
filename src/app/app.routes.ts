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
    // children: [
    //   {
    //     path:'template-details/:id',
    //     title: 'details',
    //     component: DetailsTemplateComponent
    //   }
    // ]
  },
  {
    path:'template-details/:id',
    component: DetailsTemplateComponent
  }
];
