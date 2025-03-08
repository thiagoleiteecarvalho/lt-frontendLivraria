import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { EditoraService } from '../service/editora.service';
import { EditoraConsultarComponent } from './editora-consultar.component';
import { Editora } from '../modelo/Editora';

fdescribe('EditoraConsultarComponent', () => {

  let component: EditoraConsultarComponent;
  let fixture: ComponentFixture<EditoraConsultarComponent>;
  let service: EditoraService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditoraConsultarComponent],
      imports: [HttpClientTestingModule, MatCardModule, MatToolbarModule, MatTableModule]
    });
    fixture = TestBed.createComponent(EditoraConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(EditoraService);
    http = TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
    expect(http).toBeTruthy();
  });

  it('Testando exibição de editoras ', () => {

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

    component.listar();
    fixture.detectChanges();

    component.editoras.subscribe((editoras:	Editora[])	=>	{
      expect(editoras.length).toEqual(2);
    });

    const	table	=	fixture.debugElement.query(By.css('#editoras'));
    const	tableRows	=	(table.nativeElement	as	HTMLTableElement).rows;

    expect(tableRows.length).toBe(3);
    expect(tableRows.item(1)?.cells.item(0)?.textContent).toContain('Ed1');
  });
});
