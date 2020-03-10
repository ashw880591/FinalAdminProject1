import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title.component';
import { TitleRoutingModule } from './title-routing.module';


@NgModule({
  declarations: [TitleComponent],
  imports: [
    CommonModule,
    TitleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TitleModule { }
