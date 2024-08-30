import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../../shared/shared.module';
import homeRoutes from './home.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HomePageComponent,
    WelcomeComponent,
    RouterModule.forChild(homeRoutes),
    SharedModule
  ]
})
export class HomeModule { }
