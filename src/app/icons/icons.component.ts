import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  id_Curso : string = null;
  listaCursos : any [];
  listaCalificaciones : any[];
  constructor(public cursosService: CursosService) { }

  ngOnInit() {
    this.CargarCursos();
  }
  CargarCursos() {
    this.cursosService.GetCursos().subscribe(rta => {
      this.listaCursos = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  CargarCalificaciones(){
    this.cursosService.GetCalificaciones(this.id_Curso).subscribe(rta => {
      this.listaCalificaciones = rta
      console.log(rta);
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  GuardarCalificacion(calificacion: any){
    this.cursosService.SaveCalificaciones(calificacion).subscribe(rta => {            
      Swal.fire('Mensaje', 'Guardado correctamente', 'success');
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );  
  }  
}
