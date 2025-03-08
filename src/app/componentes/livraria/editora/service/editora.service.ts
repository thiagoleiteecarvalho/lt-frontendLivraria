import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Editora } from '../modelo/Editora';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  private readonly API_listagem = '/editoras';

  private readonly API_cadastro = '/editora';

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.get<Editora[]>(this.API_listagem);
  }

  salvar(editora: Editora) {
    return this.httpClient.post<Editora>(this.API_cadastro, editora);
  }

}
