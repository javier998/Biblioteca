import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Autor } from '../autor';
import { AutorService } from '../autor.service';

@Component({
  selector: 'app-autor-ver',
  templateUrl: './autor-ver.component.html',
  styleUrls: ['./autor-ver.component.css']
})
export class AutorVerComponent implements OnInit {

  private id : number | undefined;
  autor : Autor = new Autor();

  constructor(
    private objetoServicioAutor: AutorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }
  
   obtenerDatos(){
    this.id = this.route.snapshot.params['id'];
    this.objetoServicioAutor.obtenerAutorPorId(this.id).subscribe(data =>{
      this.autor = data;
    });
  }
}
