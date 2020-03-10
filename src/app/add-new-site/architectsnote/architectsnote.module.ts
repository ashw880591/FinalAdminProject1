import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchitectsNoteComponent } from './architectsnote.component';
import { ArchitectsRoutingModule } from './architectsnote-routing.module';

@NgModule({
  declarations: [ArchitectsNoteComponent],
  imports: [
    CommonModule,
    ArchitectsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArchitectsModule { }
