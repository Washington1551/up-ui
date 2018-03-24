import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ChartModule } from 'primeng/chart';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    ChartModule,
    DragDropModule
  ],
  declarations: [],
  exports: [CommonModule, ButtonsModule, ChartModule, DragDropModule]
})
export class SharedModule { }
