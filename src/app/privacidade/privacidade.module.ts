import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacidadeComponent } from './privacidade.component';
import { PrivacidadeRoutingModule } from './privacidade-routing.module';


@NgModule({
  declarations: [
    PrivacidadeComponent
  ],
  imports: [
    CommonModule,
    PrivacidadeRoutingModule
  ]
})
export class PrivacidadeModule { }
