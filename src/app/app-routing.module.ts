import { DetalheComponent } from './pages/componentes/detalhe/detalhe.component';
import { CadVeiculosComponent } from './pages/cad-veiculos/cad-veiculos.component';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'veiculos',pathMatch: 'full'},
  {path: 'veiculos', component: VeiculosComponent},
  {path: 'cad-veiculos', component: CadVeiculosComponent},
  {path: 'detalhe/:id', component: DetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
