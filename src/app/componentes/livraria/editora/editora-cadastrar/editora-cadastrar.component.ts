import { Editora } from './../modelo/Editora';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, Routes } from '@angular/router';

import { EditoraService } from './../service/editora.service';

@Component({
  selector: 'app-editora-cadastrar',
  templateUrl: './editora-cadastrar.component.html',
  styleUrls: ['./editora-cadastrar.component.scss']
})
export class EditoraCadastrarComponent {

  form: FormGroup;

  config: MatSnackBarConfig = {duration: 5000, horizontalPosition: 'center', verticalPosition: 'top'};

  constructor(private formBuilder: FormBuilder, private editoraService: EditoraService,
    private snackBar: MatSnackBar, private router: Router)  {

    this.form = formBuilder.group({
      nome: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required),
      desconto: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

    let editora: Editora = {
      nome: this.form.value.nome,
      cnpj: this.form.value.cnpj,
      desconto: this.form.value.desconto
    };


    this.editoraService.salvar(editora).subscribe({
      error: (e) => this.onError(e),
      complete: () => this.onSuccess()
    });
  }

  onSuccess() {

    this.snackBar.open('Editora salva com sucesso.','',this.config);
    this.router.navigate(['editora-consultar']);
  }

  onError(erro: HttpErrorResponse) {
    this.snackBar.open(erro.error.mensagem,'', this.config);
  }

}
