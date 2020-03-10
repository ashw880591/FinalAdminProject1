import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GalleryModule { }
