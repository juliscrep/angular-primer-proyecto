import { Component, OnInit } from '@angular/core';



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