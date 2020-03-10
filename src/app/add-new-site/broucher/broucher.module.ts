import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BroucherComponent } from './broucher.component';
import { BroucherRoutingModule } from './broucher-routing.module';
@NgModule({
  declarations: [BroucherComponent],
  imports: [
    CommonModule,
    BroucherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BroucherModule { }
