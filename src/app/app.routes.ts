import { Routes } from '@angular/router';
import { TableTemplatesComponent } from './table-templates/table-templates.component';
import { EditFormComponent } from './EditForm/EditForm.component';
import { DetailsTemplateComponent } from './details-template/details-template.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
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
  },
  {
    path:'edit-template/:id',
    component: EditFormComponent,
    title: 'EditPage'
  },
  {
    path:'form-template',
    component: FormTemplateComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];
