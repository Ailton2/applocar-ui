import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VeiculosComponent } from './pages/veiculos/veiculos.component';
import { CadVeiculosComponent } from './pages/cad-veiculos/cad-veiculos.component';
import { HeaderComponent } from './layout/header/header.component';
import { CardVeiculoComponent } from './pages/componentes/card-veiculo/card-veiculo.component';
import { MenuComponent } from './layout/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DetalheComponent } from './pages/componentes/detalhe/detalhe.component';
import { BuscarComponent } from './shared/componentes/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    VeiculosComponent,
    CadVeiculosComponent,
    HeaderComponent,
    CardVeiculoComponent,
    MenuComponent,
    DetalheComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
