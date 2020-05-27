import { Injectable } from '@angular/core';
import { articuloFamilia } from './models/articuloFamilia';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable( {
    providedId: 'root'
  }
)
export class ArticulosService {
  private articulosUrl= 'http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias';


  constructor(private http: HttpClient) {}
  
  getArticulos(): Observable<articuloFamilia[]>{
    return this.http.get<articuloFamilia[]>('http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias');
  }

  





}