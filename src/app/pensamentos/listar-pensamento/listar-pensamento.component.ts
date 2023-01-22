import { Component, OnInit } from '@angular/core';
import {PensamentoEntity} from "../pensamento-entity";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: PensamentoEntity[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
