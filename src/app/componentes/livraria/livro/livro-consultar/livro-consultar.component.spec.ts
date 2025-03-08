import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroConsultarComponent } from './livro-consultar.component';

describe('LivroConsultarComponent', () => {
  let component: LivroConsultarComponent;
  let fixture: ComponentFixture<LivroConsultarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivroConsultarComponent]
    });
    fixture = TestBed.createComponent(LivroConsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
