import { Marca } from './marca.model';
export class Veiculo {
  marca : Marca = new Marca();
  placa: string;
  modelo: string;
  quilometragem: string;
  cor: string;
  anoFabricacao: string;
  chassi: string;
  qtdPortas: number;
  imagem: any;
}
