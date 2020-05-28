import { Component, OnInit } from '@angular/core';
import{ ArticulosFamilias} from './../models/menu';
import { articuloFamilia } from './../models/articuloFamilia';
import {ActivatedRoute} from '@angular/router';
import { ArticulosService } from '../articulos.service';


@Component({
  selector: 'app-menu-barra',
  templateUrl: './menu-barra.component.html',
  styleUrls: ['./menu-barra.component.css'],
  providers: [ArticulosService]}
)
export class MenuBarraComponent implements OnInit {
   id:string;
  listaArt:articuloFamilia[]=[];
  mensaje:string;
  verMensaje=true;
  logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPYT_kGEUZhl77IH4pGGVsFwxtNZmM6GUYMH5v51TjAf4OT2p0&usqp=CAU"; 
  colorP="green";
  verTabla=false;
  mensajeB= 'Mostrar grilla';
 
  constructor(private articulosService: ArticulosService) { }

  ngOnInit(){
   this.getDatos();
  
  this.mensaje="Aqui encontraras todos nuestros productos disponibles!";
     
  }
mostrarGrilla(){
   this.mensajeB= this.verTabla? 'Mostrar grilla': 'Ocultar grilla';
   this.verTabla=!this.verTabla;
  
}

getDatos(){

    this.articulosService.getArticulos().subscribe(
    {next:articuloFamilias=> this.listaArt=articuloFamilias,
    error: err=> console.log(err)
    });
}

}