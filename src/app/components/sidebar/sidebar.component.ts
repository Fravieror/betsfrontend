import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    Tipo_usuario : string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/table-list', title: 'Cursos',  icon:'content_paste', class: '', Tipo_usuario: '1'  },
    { path: '/user-profile', title: 'Modulos',  icon:'account_balance_wallet', class: '', Tipo_usuario: '1'  },
    { path: '/dashboard', title: 'Herramientas',  icon: 'dashboard', class: '', Tipo_usuario: '1'  },
    { path: '/typography', title: 'Registrese',  icon:'library_books', class: '', Tipo_usuario: '1'  },
    { path: '/icons', title: 'calificaciones',  icon:'bubble_chart', class: '', Tipo_usuario: '1' },
    // { path: '/maps', title: 'Registro Estudiante',  icon:'account_box', class: '', Tipo_usuario: '2'  },
    { path: '/notifications', title: 'Cursos Estudiante',  icon:'notifications', class: '', Tipo_usuario: '2' },
    // { path: '/upgrade', title: 'Ingrese',  icon:'unarchive', class: 'active-pro', Tipo_usuario: '1' },
    // { path: '/calificaciones-e', title: 'Calificaciones',  icon:'library_books', class: '', Tipo_usuario: '2'  },    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  Tipo_usuario : string = null;
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.Tipo_usuario = localStorage.getItem("Tipo_usuario");
    if(this.Tipo_usuario == null || this.Tipo_usuario == '' || this.Tipo_usuario == undefined){
      this.router.navigateByUrl('/');
    }    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
