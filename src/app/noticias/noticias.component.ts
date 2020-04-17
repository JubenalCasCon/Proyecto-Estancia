import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
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