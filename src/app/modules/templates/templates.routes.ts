import { Routes } from "@angular/router";
import { HomePageComponent } from "../home/home-page/home-page.component";
import { TemplatesPageComponent } from "./templates-page/templates-page.component";
import { DetailsTemplateComponent } from "./details-template/details-template.component";
import { EditFormComponent } from "./EditForm/EditForm.component";
import { FormTemplateComponent } from "./form-template/form-template.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./templates-page/templates-page.component').then(m => m.TemplatesPageComponent),
      },
      {
        path: 'template-details/:id',
        loadComponent: () => import('./details-template/details-template.component').then(m => m.DetailsTemplateComponent),
      },
      {
        path: 'edit-template/:id',
        loadComponent: () => import('./EditForm/EditForm.component').then(m => m.EditFormComponent)
      },
      {
        path:'form-template',
        loadComponent: () => import('./form-template/form-template.component').then(m => m.FormTemplateComponent)
      },

    ],
  },
];

export default routes;