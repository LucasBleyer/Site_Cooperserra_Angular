import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
