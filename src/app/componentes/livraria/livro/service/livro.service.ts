import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Categoria } from '../modelo/Categoria';
import { Livro } from '../modelo/Livro';
import { PesquisaLivro } from '../modelo/PesquisaLivro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API_pesquisa = '/livros';

  private readonly API_cadastro = '/livro';

  private readonly API_categorias_livros = '/categorias';

  constructor(private httpClient: HttpClient) { }

  pesquisar(pesquisaLivro: PesquisaLivro) {

    let parametros = new HttpParams();
    parametros = parametros.append("titulo", pesquisaLivro.titulo);
    parametros = parametros.append("isbn", pesquisaLivro.isbn);
    parametros = parametros.append("editora", pesquisaLivro.editora);

    return this.httpClient.get<Livro[]>(this.API_pesquisa, {params: parametros});
  }

  listarCategorias() {
    return this.httpClient.get<Categoria[]>(this.API_categorias_livros);
  }

  salvar(livro: Livro) {
    return this.httpClient.post<Livro>(this.API_cadastro, livro); //, {headers: {'Content-Type':'multipart/form-data'}}
  }

}
