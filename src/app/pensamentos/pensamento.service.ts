import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {PensamentoEntity} from "./pensamento-entity";
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar():Observable<PensamentoEntity[]> {
    return this.http.get<PensamentoEntity[]>(this.API)
  }

  criar(pensamento: PensamentoEntity): Observable<PensamentoEntity>{
    return this.http.post<PensamentoEntity>(this.API, pensamento)
  }

}
