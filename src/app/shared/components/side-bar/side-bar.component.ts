import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  menuItems: Array<any> = []
  
  ngOnInit(){
    this.menuItems = [
      {id: 1, name: 'Inicio', link: '/'},
      {id: 2, name: 'Plantillas', link: '/templates'},
      {id: 3, name: 'Historial', link: '/history'},
    ]

  }
}
