import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import templatesRouter from './templates.routes'
import { SharedModule } from '../../shared/shared.module';
import { TemplatesPageComponent } from './templates-page/templates-page.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageComponent,
    TemplatesPageComponent,
    RouterModule.forChild(templatesRouter),
    SharedModule
  ]
})
export class TemplatesModule { }
