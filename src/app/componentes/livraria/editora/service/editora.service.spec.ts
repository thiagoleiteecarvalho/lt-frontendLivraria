import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EditoraService } from './editora.service';

fdescribe('EditoraService', () => {

  let service: EditoraService;
  let http: HttpClient;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(EditoraService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Testando URL listar de EditoraService', () => {

    const	spy	=	spyOn(http,	'get').and.stub();
    service.listar();
    expect(spy).toHaveBeenCalledWith('/editoras');

  });

  it('Testando retorno listar de EditoraService', () => {

    const editoras = [{
      id: 1,
      nome: 'Ed1',
      cnpj: '',
      desconto: 10
    },
    {
      id: 2,
      nome: 'Ed2',
      cnpj: '',
      desconto: 15
    }];

    const spy = spyOn(service, 'listar').and.returnValue(of(editoras));

    service.listar().subscribe( (resultado) => {

      expect(resultado).toHaveSize(2);
      expect(resultado).toEqual(editoras);
    })
  });

  it('Testando salvar de EditoraService', () => {

  });
});
