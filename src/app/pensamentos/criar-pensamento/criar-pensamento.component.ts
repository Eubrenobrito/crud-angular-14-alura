import { Component, OnInit } from '@angular/core';
import {PensamentoEntity} from "../pensamento-entity";
import {PensamentoService} from "../pensamento.service";
import { Routes, RouterModule, Router } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamentoPai: PensamentoEntity = {
    conteudo:'',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamentoPai).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
