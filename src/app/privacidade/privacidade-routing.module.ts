import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacidadeComponent } from './privacidade.component';

const routes: Routes = [
  { path: '', component: PrivacidadeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacidadeRoutingModule { }
