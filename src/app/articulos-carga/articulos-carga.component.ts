import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup,FormsModule} from '@angular/forms'
import{ ArticulosFamilias} from './../models/menu';
import { articuloFamilia } from './../models/articuloFamilia';

@Component({
  selector: 'app-articulos-carga',
  templateUrl: './articulos-carga.component.html',
  styleUrls: ['./articulos-carga.component.css']
})
export class ArticulosCargaComponent implements OnInit {

  fg: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fg=this.fb.group({
    IdArticuloFamilia: [''],
    Nombre:['']
    })
  }

grabar(){
  if(this.fg.valid){
   console.log(`id:${this.fg.value.IdArticuloFamilia} Nombre: ${this.fg.value.Nombre}`)
ArticulosFamilias.push({
  IdArticuloFamilia: Number(this.fg.value.IdArticuloFamilia), 
  Nombre: this.fg.value.Nombre});
  window.alert('se ha grabado exitosamente!');
 }else{
    window.alert('ingrese un valor correcto!');
 }
}

}