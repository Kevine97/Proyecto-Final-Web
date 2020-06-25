import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { RetratoComponent } from './pages/retrato/retrato.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import {PruductoComponent} from './pages/pruducto/pruducto.component';
const routes: Routes = [
  {path: '',component:PortafolioComponent},
  {path: 'retrato', component:RetratoComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'producto', component:PruductoComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
