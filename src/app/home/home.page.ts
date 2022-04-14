import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  qtdDistancia: number = null;
  qtdCombustivel: number = null;
  qtdConsumo: number = null;
  resultado:number = 0;

  constructor() {}

  calcularTotal(){
    this.resultado = (this.qtdDistancia/ this.qtdConsumo)* this.qtdCombustivel;
    if(!(this.resultado > 0)) this.resultado = 0;
  }

  limpar(){
    this.qtdDistancia = null;
    this.qtdCombustivel = null;
    this.qtdConsumo = null;
    this.resultado = 0;
  }
}


