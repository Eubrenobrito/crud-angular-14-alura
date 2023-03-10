import { Component, OnInit } from '@angular/core';
import {PensamentoEntity} from "../pensamento-entity";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: PensamentoEntity[] = [];

  constructor( private service:PensamentoService) { }

  ngOnInit(){
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }


}
