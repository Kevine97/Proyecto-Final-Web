import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CargarScriptsService} from "./cargar-scripts.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { RetratoComponent } from './pages/retrato/retrato.component';
import { PruductoComponent } from './pages/pruducto/pruducto.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    RetratoComponent,
    PruductoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
