import { Component, Input, OnInit } from '@angular/core';
import {PensamentoEntity} from "../pensamento-entity";

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

 @Input() pensamento: PensamentoEntity = {
   id:0,
   conteudo: ' qualquer coisa de conteudo2222222',
    autoria: 'Breno',
    modelo: 'modelo3',
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
   if (this.pensamento.conteudo.length >= 256){
     return 'pensamento-g'
   }
   return 'pensamento-p'
  }

}
