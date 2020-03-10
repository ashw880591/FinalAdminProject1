import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterPlanComponent } from './masterplan.component';
import { MasterPlanRoutingModule } from './master-routing.module';

@NgModule({
  declarations: [MasterPlanComponent],
  imports: [
    CommonModule,
    MasterPlanRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
