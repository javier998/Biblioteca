import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor-listar',
  templateUrl: './autor-listar.component.html',
  styleUrls: ['./autor-listar.component.css']
})
export class AutorListarComponent implements OnInit {

  autores : Autor[] | undefined;

  constructor(
    private objetoServicioAutor : AutorService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.obtenerAutores();
  }

  obtenerAutores(){
    this.objetoServicioAutor.obtenerAutores().subscribe(data => {
      this.autores = data;
    });
  }

  verAutor(id:number| undefined){
    this.router.navigate(['autor-ver',id]);
  }
}
