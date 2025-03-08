import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Editora } from '../modelo/Editora';
import { EditoraService } from '../service/editora.service';

@Component({
  selector: 'app-editora-consultar',
  templateUrl: './editora-consultar.component.html',
  styleUrls: ['./editora-consultar.component.scss']
})
export class EditoraConsultarComponent {

  editoras: Observable<Editora[]> = new Observable<Editora[]>;
  displayedColumns: string[] = ['nome', 'cnpj', 'desconto'];

  constructor(private editoraService: EditoraService) {
    this.listar();
  }

  listar() {
    this.editoras = this.editoraService.listar();
  }
}
