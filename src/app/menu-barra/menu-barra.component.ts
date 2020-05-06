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
  constructor() { }

  ngOnInit() {
  this.listaArt=ArticulosFamilias;
  this.mensaje="Aqui encontraras todos nuestros productos disponibles!";
  }

}