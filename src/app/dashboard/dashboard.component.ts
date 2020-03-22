import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';
import { Observable, Observer } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listaCursos : any[];
  id_Curso : string;
  listaModulos : any[];
  Nombre : string;
  Descripcion : string;
  id_discapacidad : string;
  id_Modulo : string;
  ruta : string;
  listaHerramientas : any[];
  listaDiscapacidad : any[];
  PdfBase64 : string;
  VideoBase64 : string;
  pdf : any;
  video : any;
  MostrarPDF : any = null;
  ViewVideo : string;

  constructor(public cursosService: CursosService, private sanitizer: DomSanitizer) { }
  CargarCursos() {
    this.cursosService.GetCursos().subscribe(rta => {
      this.listaCursos = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }  
  ngOnInit() {
    this.CargarCursos();
    this.CargarDiscapacidad();
  }
  CargarHerramientas() {
    this.cursosService.GetHerramientas(this.id_Curso, this.id_Modulo).subscribe(rta => {
      this.listaHerramientas = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  CargarModulos(){  
    this.cursosService.GetModulos(this.id_Curso).subscribe(rta => {
      this.listaModulos = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    });
  }
  onFormSubmit(){
    let herramienta = {
      Descripcion : this.Descripcion,
      Id_Curso : this.id_Curso,
      Id_discapacidad : this.id_discapacidad,
      Id_modulo : this.id_Modulo,
      Nombre : this.Nombre,
      PdfBase64 : this.PdfBase64,    
      VideoBase64 : this.VideoBase64
    }
    this.cursosService.SaveHerramientas(herramienta).subscribe(rta => {
      Swal.fire('Mensaje', 'Herramienta guardada correctamente', 'success');
      this.LimpiarFormulario();
      this.CargarHerramientas();
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    });
  }
  LimpiarFormulario() {
    this.Descripcion = null;
    this.id_Curso = null;
    this.id_discapacidad = null;
    this.id_Modulo = null;
    this.Nombre = null;
    this.ruta = null;
    this.pdf = null;
    this.video = null;    
  }
  CargarDiscapacidad(){    
    this.cursosService.GetDiscapacidad().subscribe(rta => {
      this.listaDiscapacidad = rta
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  handlePDFSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderPDFLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }
  _handleReaderPDFLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.PdfBase64 = btoa(binaryString);    
  }
  handleVideoSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderVideoLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }
  _handleReaderVideoLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.VideoBase64 = btoa(binaryString);    
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
