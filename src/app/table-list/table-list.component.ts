import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(public cursosService: CursosService) { }
  nombre: string = null;
  descripcion: string = null;
  listaCursos: any[] = null;
  ngOnInit() {
    this.CargarCursos();
  }
  GuardarCurso() {
    this.cursosService.SaveCursos(this.nombre, this.descripcion).subscribe(rta => {
      this.LimpiarFormulario();
      this.CargarCursos();
      Swal.fire('Mensaje', 'Guardado correctamente', 'success');
    },
      error => {
        Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
        console.log(error);
      })
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
  LimpiarFormulario() {
    this.nombre = null;
    this.descripcion = null;
  }
}
