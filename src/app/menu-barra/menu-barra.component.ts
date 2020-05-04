import { Component, OnInit } from '@angular/core';
import {articuloFamilia} from './menu/articuloFamilia';
import {ArticulosFamilias} from './menu/ArticulosFamilias';


@Component({
  selector: 'app-menu-barra',
  templateUrl: './menu-barra.component.html',
  styleUrls: ['./menu-barra.component.css']}
)
export class MenuBarraComponent implements OnInit {

  listaArt: articuloFamilia[];

  constructor() { }

  ngOnInit() {
    this.listaArt= ArticulosFamilias;
  }

}