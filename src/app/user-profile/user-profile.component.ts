import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public cursosService: CursosService) { }
  listaCursos : any[];
  listaModulos : any[];
  id_Curso : string = null;
  id_CursoSeleccionado : number = null;
  nombre : string = null;
  descripcion : string = null;
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
  GuardarModulo(){
    this.cursosService.SaveModulos(this.nombre, this.descripcion, this.id_Curso).subscribe(rta => {
      this.LimpiarFormulario();
      this.CargarModulos();
      Swal.fire('Mensaje', 'Guardado correctamente', 'success');
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );    
  }
  LimpiarFormulario(){
    this.id_CursoSeleccionado = null;
    this.nombre = null; 
    this.descripcion = null;
  }
  CargarModulos(){  
    this.cursosService.GetModulos(this.id_Curso).subscribe(rta => {
      this.listaModulos = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }

}
