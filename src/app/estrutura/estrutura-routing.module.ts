import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstruturaComponent } from './estrutura.component';

const routes: Routes = [
  { path: '', component: EstruturaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstruturaRoutingModule { }
