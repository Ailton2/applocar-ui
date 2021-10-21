import { Marca } from './../../../model/marca.model';
import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/model/veiculo.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-veiculo',
  templateUrl: './card-veiculo.component.html',
  styleUrls: ['./card-veiculo.component.scss']
})
export class CardVeiculoComponent implements OnInit {

  veiculos: any;
  modelo: string;

  constructor(private services: ServicesService, private router: Router) { }

  ngOnInit(): void {
    this.services.getListVeiculos().subscribe((res: any) =>{
      if(res){
          this.veiculos = res
      }

    })
  }

  getSearch(value: string){
    this.services.getListPorModelo(value).subscribe(res=>{
      this.veiculos = res
    })
  }
  
  navigateDetalhe(id: number){
    this.router.navigate(['detalhe/'+id]);
  }

}
