import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';

declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  Id_usuario : string = localStorage.getItem("Id_usuario");
  listaModulos : any[];
  herramientas : any[];
  Id_modulo : string;
  ViewVideo : string;
  constructor(public cursosService: CursosService) { }

  
  ngOnInit() {
    this.CargarModulosUsuario();
  }
  CargarModulosUsuario(){
    this.cursosService.GetModulosUsuario(this.Id_usuario).subscribe(rta => {
      console.log(rta);
      this.listaModulos = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  CargarCurso(){
    this.cursosService.GetHerramientas(null, this.Id_modulo).subscribe(rta => {     
      console.log(rta);
      this.herramientas = rta;
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  DescargarAdjunto(ruta: string) {    
    this.cursosService.GetImagen(ruta).subscribe(rta => {  

      const linkSource = 'data:application/pdf;base64,' + rta;
      const downloadLink = document.createElement("a");
      const fileName = ruta;

      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
     
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  VerVideo(ruta: string){
    this.cursosService.GetImagen(ruta).subscribe(rta => {
      this.ViewVideo = "data:video/mp4;base64," + rta;
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      this.ViewVideo  = null;
      console.log(error);
    }
    );   
  }
  CerrarVideo(){
    this.ViewVideo = null;
  }
}
