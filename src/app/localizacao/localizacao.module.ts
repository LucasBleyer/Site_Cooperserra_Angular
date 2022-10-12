import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacaoRoutingModule } from './localizacao-routing.module';
import { LocalizacaoComponent } from './localizacao.component';

@NgModule({
  declarations: [
    LocalizacaoComponent
  ],
  imports: [
    CommonModule,
    LocalizacaoRoutingModule
  ]
})
export class LocalizacaoModule { }
