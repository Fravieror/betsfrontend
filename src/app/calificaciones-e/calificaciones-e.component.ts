import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calificaciones-e',
  templateUrl: './calificaciones-e.component.html',
  styleUrls: ['./calificaciones-e.component.scss']
})
export class CalificacionesEComponent implements OnInit {
  
  constructor(public cursosService: CursosService) { } 
  nombre : string = null;
  descripcion : string = null;
  ngOnInit() {
  }
  GuardarCurso(){
    this.cursosService.SaveCursos(this.nombre, this.descripcion).subscribe(rta => {                
      this.LimpiarFormulario();
      Swal.fire('Mensaje', 'Guardado correctamente', 'success');      
    },
    error => {      
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    })
  }
  LimpiarFormulario(){
    this.nombre = null;
    this.descripcion = null;
  }
}
