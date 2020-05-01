import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  IdArticuloFamilia: number;
  Nombre: string;

 
ArticuloFamilia:any[] = [
    { IdArticuloFamilia: 1, Nombre: "Accesorios" },
    { IdArticuloFamilia: 2, Nombre: "Audio" },
    { IdArticuloFamilia: 3, Nombre: "Celulares" },
    { IdArticuloFamilia: 4, Nombre: "Cuidado Personal" },
    { IdArticuloFamilia: 5, Nombre: "Dvd" },
    { IdArticuloFamilia: 6, Nombre: "Fotografia" },
    { IdArticuloFamilia: 7, Nombre: "Frio-Calor" },
    { IdArticuloFamilia: 8, Nombre: "Gps" },
    { IdArticuloFamilia: 9, Nombre: "Informatica" },
    { IdArticuloFamilia: 10, Nombre: "Led - Lcd" }
];
 
ngOnInit() {
    let tabla: HTMLTableElement =<HTMLTableElement>document.getElementById("cuerpoTabla");   
  
    this.ArticuloFamilia.slice(0, this.ArticuloFamilia.length + 1).forEach(art => {tabla.innerHTML += `<tr><td>${art.IdArticuloFamilia}</td><td>${art.Nombre}</td></tr>`;
    });
}
}