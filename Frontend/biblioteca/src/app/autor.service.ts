import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private BaseUriAll = "http://localhost:8080/autores";
  private BaseUri = "http://localhost:8080/autor";

  constructor(
    private httpCliente: HttpClient) { }

  obtenerAutores():Observable<Autor[]>{
    return this.httpCliente.get<Autor[]>(`${this.BaseUriAll}`);
  }

  obtenerAutorPorId(id:number | undefined):Observable<Autor>{
    return this.httpCliente.get<Autor>(`${this.BaseUri}/${id}`);
  }

  guardarAutor(autor : Autor | undefined):Observable<Autor>{
    return this.httpCliente.post<Autor>(`${this.BaseUri}`, autor);
  }

  actualizarAutor(autor:Autor | undefined, id: number | undefined):Observable<Autor>{
    return this.httpCliente.put<Autor>(`${this.BaseUri}/${id}`,autor);
  }
}
