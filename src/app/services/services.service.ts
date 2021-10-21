import { Marca } from './../model/marca.model';
import { Veiculo } from './../model/veiculo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  base_url = 'http://localhost:8080/apilocar/'
  constructor(private http: HttpClient) { }


  getListVeiculos():Observable<Veiculo>{
    return this.http.get<Veiculo>(this.base_url+`veiculo`);
  }

  getListPorModelo(modelo: string):Observable<Veiculo>{
    return this.http.get<Veiculo>(this.base_url+`veiculo/modelo?modelo=${modelo}`);
  }

  getListMarcas():Observable<Marca>{
    return this.http.get<Marca>(this.base_url+`marca`);
  }

  getVeiculoPorId(id: number):Observable<Veiculo>{
    return this.http.get<Veiculo>(this.base_url+`veiculo/${id}`);
  }

  postVeiculo(veiculo: Veiculo):Observable<any>{
    return this.http.post(this.base_url+`veiculo`, veiculo,{observe: 'response', responseType: 'text' });
  }
}
