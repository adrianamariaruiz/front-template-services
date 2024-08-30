import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomePageComponent } from '../home/home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import authRouter from './auth.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRouter),
    SharedModule
  ]
})
export class AuthModule { }
