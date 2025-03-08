import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Editora } from '../../editora/modelo/Editora';
import { EditoraService } from '../../editora/service/editora.service';
import { Categoria } from '../modelo/Categoria';
import { Livro } from '../modelo/Livro';
import { LivroService } from '../service/livro.service';

@Component({
  selector: 'app-livro-cadastrar',
  templateUrl: './livro-cadastrar.component.html',
  styleUrls: ['./livro-cadastrar.component.scss']
})
export class LivroCadastrarComponent {

  form: FormGroup;

  config: MatSnackBarConfig = {duration: 5000, horizontalPosition: 'center', verticalPosition: 'top'};

  editoras: Editora[] = [];
  categorias: Categoria[] = [];

  capaLivro: string = '';

  constructor(private formBuilder: FormBuilder, private livroService: LivroService,
    private snackBar: MatSnackBar, private router: Router, private httpClient: HttpClient,
    private editoraService: EditoraService) {

    this.editoraService.listar().subscribe(editoras => {this.editoras = editoras as Editora[]});
    this.livroService.listarCategorias().subscribe(categorias => {this.categorias = categorias as Categoria[]});

    this.form = formBuilder.group({
      isbn:  [null],
      titulo: [null],
      subTitulo: [null],
      categoria: [null],
      autor: [null],
      edicao: [null],
      dataPublicacao: [null],
      editoraId: [null],
      sinopse: [null],
      quantidadePaginas: [null],
      quantidade: [null],
      preco: [null],
      precoDesconto: [null],
      capa: [null]
    });
  }

  onSelectFile(event: any) {

    let reader: FileReader = new FileReader();
    let arquivo: File = this.form.get('capa')?.value;


    reader.onload = (event: any) => {
      this.capaLivro = event.target.result;
    };

    reader.readAsDataURL(arquivo);

  }

  onSubmit() {

    let editora: Editora = {
      id: this.form.value.editoraId
    };

    let livro: Livro = {
      isbn: this.form.value.isbn,
      titulo: this.form.value.titulo,
      subTitulo: this.form.value.subTitulo,
      categoria: this.form.value.categoria,
      autor: this.form.value.autor,
      edicao: this.form.value.edicao,
      dataPublicacao: this.form.value.dataPublicacao,
      editora: editora,
      sinopse: this.form.value.sinopse,
      quantidadePaginas: this.form.value.quantidadePaginas,
      quantidade: this.form.value.quantidade,
      preco: this.form.value.preco,
      capa: this.capaLivro
    };


    this.livroService.salvar(livro).subscribe({
      error: (e) => this.onError(e),
      complete: () => this.onSuccess()
    });
  }

  onSuccess() {

    this.snackBar.open('Livro salvo com sucesso.','',this.config);
    this.router.navigate(['livro-consultar']);
  }

  onError(erro: HttpErrorResponse) {
    this.snackBar.open(erro.error.mensagem,'', this.config);
  }

}
