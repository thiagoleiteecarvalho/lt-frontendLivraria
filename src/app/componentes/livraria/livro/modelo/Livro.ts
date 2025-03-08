import { Editora } from "../../editora/modelo/Editora";

export interface Livro {
  id?: number,
  isbn: string,
  titulo: string,
  subTitulo?: string,
  categoria: string,
  autor: string,
  edicao: string,
  dataPublicacao: Date,
  editora: Editora,
  sinopse: string,
  quantidadePaginas: number,
  quantidade: number,
  preco: number,
  precoDesconto?: number,
  capa?: string
}
