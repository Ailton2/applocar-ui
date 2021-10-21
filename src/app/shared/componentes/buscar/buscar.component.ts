import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public buscar(value: string){
    this.emmitSearch.emit(value);
  }
}
