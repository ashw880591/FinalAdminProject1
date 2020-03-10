import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationAndContactComponent } from './locationandcontactdetails.component';
import { LocationAndContactRoutingModule } from './locationandconatctdetails-routing.module';

@NgModule({
  declarations: [LocationAndContactComponent],
  imports: [
    CommonModule,
    LocationAndContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LocationModule { }
