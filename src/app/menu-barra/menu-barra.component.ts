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
  listaArt:articuloFamilia[];
  mensaje:string;
  verMensaje=true;
  logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPYT_kGEUZhl77IH4pGGVsFwxtNZmM6GUYMH5v51TjAf4OT2p0&usqp=CAU"; 
  colorP="green";
  verTabla=false;
  mensajeB= 'Mostrar grilla';
 
  constructor(private articulosService: ArticulosService) { }

  ngOnInit() : void{
  this.listaArt=this.articulosService.getArticulos();
  this.mensaje="Aqui encontraras todos nuestros productos disponibles!";
  this.id= +this.route.snapshot.paramMap.get("id");
   
  }
mostrarGrilla(){
   this.mensajeB= this.verTabla? 'Mostrar grilla': 'Ocultar grilla';
   this.verTabla=!this.verTabla;
  
}
}