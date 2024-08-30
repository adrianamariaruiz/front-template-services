import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    SideBarComponent,
    NavBarComponent
  ],
  exports: [
    SideBarComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
