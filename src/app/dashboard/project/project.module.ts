import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProjectModule { }
