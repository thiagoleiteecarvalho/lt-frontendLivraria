import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoraCadastrarComponent } from './editora-cadastrar.component';

describe('EditoraCadastrarComponent', () => {
  let component: EditoraCadastrarComponent;
  let fixture: ComponentFixture<EditoraCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditoraCadastrarComponent]
    });
    fixture = TestBed.createComponent(EditoraCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
