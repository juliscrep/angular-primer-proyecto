import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MenuBarraComponent } from './menu-barra/menu-barra.component';
import { RouterModule } from '@angular/router';
import { ArticulosCargaComponent } from './articulos-carga/articulos-carga.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {  path: 'listaArticulos/:id', component: MenuBarraComponent},
    { path: 'listaArticulos', component: MenuBarraComponent},
    { path: 'cargaArticulos', component: ArticulosCargaComponent},
    {path:"Principal", component: AppComponent},
    {path:" ", component: AppComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, MenuBarraComponent, ArticulosCargaComponent ],
  bootstrap:    [ AppComponent,MenuBarraComponent ]
})
export class AppModule { }
