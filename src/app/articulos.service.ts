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
  
  getArticulos(): Observable<IArticulo[]>{
    return this.http.get<IArticulo[]>(this.articulosUrl);
  }

  





}