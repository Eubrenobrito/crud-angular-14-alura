import { Component, OnInit } from '@angular/core';
import {PensamentoEntity} from "../pensamento-entity";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentoPai: PensamentoEntity = {
    id: 1,
    conteudo:'Aprendendo angular',
    autoria: 'dev',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('dsada')
  }

  cancelar() {

  }
}
