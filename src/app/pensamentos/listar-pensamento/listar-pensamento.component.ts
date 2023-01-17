import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: ' quassssslquer coisa de conteudo1212',
      autoria: 'Breno1',
      modelo: 'modelo1',
    },
    {
      conteudo: ' quassssslquer coisa de conteudo1212',
      autoria: 'Breno2',
      modelo: 'modelo2',
    },
    {
      conteudo: ' quassssslquer coisa de conteudo1212',
      autoria: 'Breno3',
      modelo: 'modelo3',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
