import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditoraConsultarComponent } from './componentes/livraria/editora/editora-consultar/editora-consultar.component';
import { EditoraCadastrarComponent } from './componentes/livraria/editora/editora-cadastrar/editora-cadastrar.component';
import { LivroConsultarComponent } from './componentes/livraria/livro/livro-consultar/livro-consultar.component';
import { LivroCadastrarComponent } from './componentes/livraria/livro/livro-cadastrar/livro-cadastrar.component';

const routes: Routes = [
{
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
},
{
    path: 'editora-consultar',
    component: EditoraConsultarComponent
},
{
    path: 'editora-cadastrar',
    component: EditoraCadastrarComponent
},
{
    path: 'livro-consultar',
    component: LivroConsultarComponent
},
{
    path: 'livro-cadastrar',
    component: LivroCadastrarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
