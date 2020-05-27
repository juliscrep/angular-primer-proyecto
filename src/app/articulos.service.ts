import { Injectable } from '@angular/core';
import { articuloFamilia } from './models/articuloFamilia';
import {HttpClient} from '@angular/common/http'
import {observable} from 'rxjs'

@Injectable( {
    providedId: 'root'
  }
)
export class ArticulosService {

  constructor() {}
  getArticulos(): articuloFamilia[]{
    return[
    { IdArticuloFamilia: 1, Nombre: "Accesorios" },
    { IdArticuloFamilia: 2, Nombre: "Audio" },
    { IdArticuloFamilia: 3, Nombre: "Celulares" },
    { IdArticuloFamilia: 4, Nombre: "Cuidado Personal" },
    { IdArticuloFamilia: 5, Nombre: "Dvd" },
    { IdArticuloFamilia: 6, Nombre: "Fotografia" },
    { IdArticuloFamilia: 7, Nombre: "Frio-Calor" },
    { IdArticuloFamilia: 8, Nombre: "Gps" },
    { IdArticuloFamilia: 9, Nombre: "Informatica" },
    { IdArticuloFamilia: 10, Nombre: "Led - Lcd" },
     { IdArticuloFamilia: 11, Nombre: " Computadora" },
    ];
  }

  





}