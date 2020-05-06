import { Component, OnInit } from '@angular/core';
import{ ArticulosFamilias} from './../models/menu';
import { articuloFamilia } from './../models/articuloFamilia';


@Component({
  selector: 'app-menu-barra',
  templateUrl: './menu-barra.component.html',
  styleUrls: ['./menu-barra.component.css']}
)
export class MenuBarraComponent implements OnInit {

  listaArt:articuloFamilia[];
  mensaje:string;
  verMensaje=true;
  logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPYT_kGEUZhl77IH4pGGVsFwxtNZmM6GUYMH5v51TjAf4OT2p0&usqp=CAU"; 
  constructor() { }

  ngOnInit() {
  this.listaArt=ArticulosFamilias;
  this.mensaje="Aqui encontraras todos nuestros productos disponibles!";
  }

}