import { Injectable } from '@angular/core';
import { articuloFamilia } from './models/articuloFamilia';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { of } from 'rxjs';

@Injectable( {
    providedIn: "root"
  }
)
export class ArticulosService {
  Curl:string ;

  constructor(private http: HttpClient) {
    this.Curl="http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias";
  }
  
   getArticulos():Observable<articuloFamilia[]>{
    return this.http.get<articuloFamilia[]>(this.Curl);
  }

  





}