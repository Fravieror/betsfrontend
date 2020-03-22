import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { globales } from 'app/services/globales';
import { RequestOptions } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(private http: Http, private globals: globales) { 

  }
  GetCursos(   
  ) {
    var endPoint = '/api/Curso';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();   
    let options = new RequestOptions();

    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          ));      
  }
  SaveCursos(nombre: string, descripcion: string) {
    var endPoint = '/api/Curso';
    let HeadersApp = new Headers();
    let curso = {
      Descripcion : descripcion,
      Nombre : nombre
    }
    let options = new RequestOptions();
    return this.http
      .post(this.globals.DireccionIP + endPoint, curso, options).pipe(map(response => {
        return response.json()
      }
      ));
  }
  SaveModulos(nombre: string, descripcion: string, id_curso){
    var endPoint = '/api/Modulo';
    let HeadersApp = new Headers();
    let modulo = {
      Id_curso : id_curso,
      Descripcion : descripcion,
      Nombre : nombre
    }
    let options = new RequestOptions();
    return this.http
      .post(this.globals.DireccionIP + endPoint, modulo, options).pipe(map(response => {
        return response.json()
      }
      ));
  }
  GetModulos(
    id_curso : string = null   
  ) {
    
    var endPoint = '/api/Modulo?id_curso=' + id_curso;

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();   
    ParamsApp.append('id_curso', id_curso);
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          ));      
  }
  LoginUsuario(email: string, contrasena : string){
    var endPoint = '/api/Login';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();      
    let options = new RequestOptions({params : ParamsApp});

    let login = {
      Email : email,
      Contrasena : contrasena      
    }
    return this.http
          .post(this.globals.DireccionIP + endPoint, login, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  SaveUsuario(usuario : any){
    var endPoint = '/api/Usuarios';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();      
    let options = new RequestOptions({params : ParamsApp});
    
    return this.http
          .post(this.globals.DireccionIP + endPoint, usuario, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  SaveHerramientas(herramienta : any){
    var endPoint = '/api/Herramientas';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();      
    let options = new RequestOptions({params : ParamsApp});
    
    return this.http
          .post(this.globals.DireccionIP + endPoint, herramienta, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  GetHerramientas(id_curso : string, id_modulo: string ){
    var endPoint = '/api/Herramientas?id_curso=' + id_curso + '&id_modulo=' + id_modulo;

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();   
    ParamsApp.append('id_curso', id_curso);
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          ));    
  }
  GetDiscapacidad(){
    var endPoint = '/api/Discapacidad';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();       
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          ));    
  }
  GetUsuario(email : string){
    var endPoint = '/api/Usuarios?email=' + email;

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();       
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  GetCalificaciones(id_Curso : string){
    var endPoint = '/api/Calificaciones?Id_curso=' + id_Curso;

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();       
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  SaveCalificaciones(calificaciones : any){
    var endPoint = '/api/Calificaciones';

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();      
    let options = new RequestOptions({params : ParamsApp});
    
    return this.http
          .post(this.globals.DireccionIP + endPoint, calificaciones, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
  GetImagen(ruta: string){
    var endPoint = '/api/Herramientas?ruta=' + ruta;

    let HeadersApp = new Headers({ Accept: "*/*" });
    let ParamsApp: URLSearchParams = new URLSearchParams();
    let options = new RequestOptions({ params: ParamsApp });

    return this.http
      .get(this.globals.DireccionIP + endPoint, options)
      .pipe(map(response => {
        return response.json()
      }
      )); 
  }
  GetModulosUsuario(Id_usuario){
    var endPoint = '/api/Calificaciones?Id_usuario=' + Id_usuario;

    let HeadersApp = new Headers({Accept: "*/*"});        
    let ParamsApp: URLSearchParams = new URLSearchParams();       
    let options = new RequestOptions({params : ParamsApp});


    return this.http
          .get(this.globals.DireccionIP + endPoint, options)
          .pipe(map(response => {
            return response.json()}
          )); 
  }
}
