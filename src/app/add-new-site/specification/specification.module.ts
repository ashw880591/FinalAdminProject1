import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecificationRoutingModule } from './specification-routing.module';
import { SpecificationsComponent } from './specification.component';
@NgModule({
  declarations: [SpecificationsComponent],
  imports: [
    CommonModule,
    SpecificationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SpecificationModule { }
