import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaComponent } from './estrutura.component';
import { EstruturaRoutingModule } from './estrutura-routing.module';

@NgModule({
  declarations: [
    EstruturaComponent
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule
  ]
})
export class EstruturaModule { }
