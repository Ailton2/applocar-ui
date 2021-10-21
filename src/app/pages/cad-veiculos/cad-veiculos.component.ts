import { ServicesService } from './../../services/services.service';
import { Veiculo } from './../../model/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cad-veiculos',
  templateUrl: './cad-veiculos.component.html',
  styleUrls: ['./cad-veiculos.component.scss']
})
export class CadVeiculosComponent implements OnInit {

  veiculo = new Veiculo();
  marcas: any;
  fd = new FormData();
  urlImg = '';

  constructor(private services: ServicesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event: any) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
    })()
     this.services.getListMarcas().subscribe(res =>{
       if(res){
         this.marcas = res
       }
     });
  }

  handleFileInput(event:any){
    if(event.target.files && event.target.files[0]){

      const imagem =event.target.files[0];
      const fileReader = new FileReader();


      fileReader.readAsDataURL(imagem);
      fileReader.onload=(event: any)=>{
        this.urlImg = event.target.result;
        this.veiculo.imagem = event.target.result;
        console.log(this.veiculo.imagem)
      }

    }
  }


  salvar(){
     this.services.postVeiculo(this.veiculo).subscribe((res) =>{
      if(res.status == '201' || res.status == '200'){
        this.toastr.success("Salvo com sucesso!")
      }
     });
  }


}
