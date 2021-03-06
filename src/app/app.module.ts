import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MenuBarraComponent } from './menu-barra/menu-barra.component';
import { RouterModule } from '@angular/router';
import { ArticulosCargaComponent } from './articulos-carga/articulos-carga.component';
import { ArticulosService } from './articulos.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,RouterModule.forRoot([
    { path: 'listaArticulos/:id', component: MenuBarraComponent},
    { path: 'listaArticulos', component: MenuBarraComponent},
    { path: 'cargaArticulos', component: ArticulosCargaComponent},
    {path:"Principal", component: AppComponent},
    {path:" ", component: AppComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, MenuBarraComponent, ArticulosCargaComponent ],
  bootstrap:    [ AppComponent,MenuBarraComponent ],
  providers: [ArticulosService]
})
export class AppModule { }
