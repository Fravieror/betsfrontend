import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'app/services/cursos.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public cursosService: CursosService) { }

  email : string = null;
  contrasena : string = null;
  ngOnInit() {
  }

  onFormSubmit() {    
    this.cursosService.LoginUsuario(this.email, this.contrasena).subscribe(rta => {
      if (rta.esCorrecta) {
        this.cursosService.GetUsuario(this.email).subscribe(rta => {
          localStorage.setItem("Tipo_usuario", rta.Tipo_usuario);
          localStorage.setItem("Id_usuario", rta.Id_usuario);
          if(rta.Tipo_usuario == '1'){
            this.router.navigateByUrl('/table-list');            
          }
          else{
            this.router.navigateByUrl('/notifications');
          }          
        }, error => {
          Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
          console.log(error);
        });
      }
      else {
        Swal.fire('Mensaje', 'Email y/o contraseña invalidos', 'error');
      }
    }, error => {
      Swal.fire('Mensaje', 'Error interno, consulte con administrador', 'error');
      console.log(error);
    });    
  }

}
