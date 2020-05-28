import { Injectable } from '@angular/core';
import { articuloFamilia } from './models/articuloFamilia';
import {HttpClient, HttpHeaders,HttpErrorResponse,HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import { of } from 'rxjs';

@Injectable( {
    providedIn: "root"
  }
)
export class ArticulosService {
  

  constructor(private http: HttpClient) {  }
  
   getArticulos():Observable<articuloFamilia[]>{
    return this.http.get<articuloFamilia[]>("http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias/");
  }

  





}