import { Component, OnInit } from '@angular/core';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(public cursosService: CursosService) { }
  TipoDocumento : string = null;
  NumeroIdentificacion : string = null;
  Nombre : string = null;
  Apellido : string = null;
  FechaNacimiento : Date = null;
  email : string = null;
  Telefono : number = null;
  Celular : number = null;
  Genero : string = null;
  Rol : string = null;
  contrasena : string = null;
  id_Discapacidad : string = null;
  listaDiscapacidad : any[] = null;
  emailBusqueda :string = null;
  Usuario : any = null;
  UsuarioAGuardar : any = null;

  ngOnInit() {
    this.CargarDiscapacidad();
  }

  onFormSubmit(){        
    if(this.Usuario == null){
      this.UsuarioAGuardar = {      
        T_Doc : this.TipoDocumento,
        N_Doc : this.NumeroIdentificacion,
        Nombres : this.Nombre,
        Apellidos : this.Apellido,
        F_Nacimiento : this.FechaNacimiento,
        Email : this.email,
        Telefono : this.Telefono,
        Celular : this.Celular,
        Genero : this.Genero,
        Tipo_usuario : this.Rol,
        Id_discapacidad : this.id_Discapacidad,
        contrasena : this.contrasena
      } 
    }
    else {
      this.UsuarioAGuardar = {    
        Id_usuario : this.Usuario.Id_usuario,
        T_Doc : this.TipoDocumento,
        N_Doc : this.NumeroIdentificacion,
        Nombres : this.Nombre,
        Apellidos : this.Apellido,
        F_Nacimiento : this.FechaNacimiento,
        Email : this.email,
        Telefono : this.Telefono,
        Celular : this.Celular,
        Genero : this.Genero,
        Tipo_usuario : this.Rol,
        Id_discapacidad : this.id_Discapacidad,
        contrasena : this.contrasena
      } 

    }   
    this.cursosService.SaveUsuario(this.UsuarioAGuardar).subscribe(rta => {
      if(rta.esCorrecta){
        Swal.fire('Mensaje', 'Usuario guardado correctamente', 'success');
        this.LimpiarFormulario();
      }else{
        Swal.fire('Mensaje', rta.Observaciones, 'error');        
      }      
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
  LimpiarFormulario(){
    this.TipoDocumento  = null;
    this.NumeroIdentificacion = null;
    this.Nombre  = null;
    this.Apellido = null;
    this.FechaNacimiento  = null;
    this.email  = null;
    this.Telefono  = null;
    this.Celular = null;
    this.Genero  = null;
    this.Rol  = null;
    this.contrasena = null;
    this.id_Discapacidad = null;
    this.emailBusqueda = null;
    this.Usuario = null;
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
  CosultarUsuario(){
    this.cursosService.GetUsuario(this.emailBusqueda).subscribe(rta => {
      this.Usuario = rta;
      this.TipoDocumento = rta.T_Doc;
      this.NumeroIdentificacion = rta.N_Doc;
      this.Nombre = rta.Nombres;
      this.Apellido = rta.Apellidos;
      this.FechaNacimiento = rta.F_Nacimiento;
      this.email = rta.Email;
      this.Telefono = rta.Telefono;
      this.Celular = rta.Celular;
      this.Genero = rta.Genero;
      this.Rol = rta.Tipo_usuario;
      this.id_Discapacidad = rta.Id_discapacidad;
      this.contrasena = rta.contrasena;
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    }
    );
  }
}
