import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module')
      .then(m => m.SobreModule)
  },
  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura.module')
      .then(m => m.EstruturaModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module')
      .then(m => m.ProdutosModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./localizacao/localizacao.module')
      .then(m => m.LocalizacaoModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module')
      .then(m => m.ContatoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
