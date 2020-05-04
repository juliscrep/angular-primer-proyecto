import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { MenuBarraComponent } from './menu-barra/menu-barra.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MenuBarraComponent ],
  bootstrap:    [ AppComponent,MenuBarraComponent ]
})
export class AppModule { }
