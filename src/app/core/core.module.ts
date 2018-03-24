import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [LayoutComponent, NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
