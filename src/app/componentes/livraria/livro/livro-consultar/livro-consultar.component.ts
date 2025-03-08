import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

import { Editora } from '../../editora/modelo/Editora';
import { EditoraService } from '../../editora/service/editora.service';
import { Livro } from '../modelo/Livro';
import { PesquisaLivro } from '../modelo/PesquisaLivro';
import { LivroService } from '../service/livro.service';

@Component({
  selector: 'app-livro-consultar',
  templateUrl: './livro-consultar.component.html',
  styleUrls: ['./livro-consultar.component.scss']
})
export class LivroConsultarComponent {

  pesquisaLivro: PesquisaLivro = {
    titulo: '',
    isbn: '',
    editora: 0
  };
  livros: Livro[] = [];
  editoras: Editora[] = [];
  displayedColumns: string[] = ['titulo', 'subtitulo', 'editora', 'preco'];

  form: FormGroup;
  config: MatSnackBarConfig = {duration: 5000, horizontalPosition: 'center', verticalPosition: 'top'};

  constructor(private livroService: LivroService, private formBuilder: FormBuilder,
    private editoraService: EditoraService, private snackBar: MatSnackBar) {

    this.editoraService.listar().subscribe(editoras => {this.editoras = editoras as Editora[]});

    this.form = formBuilder.group({
      titulo: '',
      isbn: '',
      editora: 0
    });

  }

  onSubmit() {

    this.pesquisaLivro.titulo = this.form.value.titulo;
    this.pesquisaLivro.isbn = this.form.value.isbn;

    if (this.form.value.editora.id != 0) {
      this.pesquisaLivro.editora = this.form.value.editora;
    }

    this.livroService.pesquisar(this.pesquisaLivro).subscribe({
      next: (result) => {this.livros = result as Livro[]},
      error: (e) => this.onError(e),
      complete: () => { if (this.livros.length == 0)  this.onComplete()}
    });
  }

  onError(erro: HttpErrorResponse) {
    this.snackBar.open(erro.error.mensagem, '', this.config);
  }

  onComplete() {
    this.snackBar.open('Nenhum livro encontrado', '', this.config);
  }

  onClear() {

    this.livros = [];

    this.form.value.titulo = '';
    this.form.value.isbn = '';
    this.form.value.editora = 0;
  }
}
