import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { FloorPlansComponent } from './floorplan.component';
import { FloorPlanRoutingModule } from './floorplan-routing.module';
@NgModule({
  declarations: [FloorPlansComponent],
  imports: [
    CommonModule,
    FloorPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FloorPlanModule { }
