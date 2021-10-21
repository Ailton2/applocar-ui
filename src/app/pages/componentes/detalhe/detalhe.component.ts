import { ServicesService } from './../../../services/services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Veiculo } from 'src/app/model/veiculo.model';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  id: number;
  veiculo: Veiculo;

  constructor(private route: ActivatedRoute, private services: ServicesService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if(this.id){
      this.services.getVeiculoPorId(this.id).subscribe(res=>{
        this.veiculo = res;
        console.log(res)
      })
    }

  }

}
