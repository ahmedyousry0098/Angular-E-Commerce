import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PNFComponent } from './pnf/pnf.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PNFComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
