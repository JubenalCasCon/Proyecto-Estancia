import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informativo',
  templateUrl: './informativo.component.html',
  styleUrls: ['./informativo.component.css']
})
export class InformativoComponent implements OnInit {
    public seleccion:number;
  constructor() {
    this.seleccion=1;

   }

  ngOnInit() {
    

  }

  mostrararticulo(valor)
  {
    this.seleccion = valor;
  }

}
