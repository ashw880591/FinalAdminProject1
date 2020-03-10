import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainsliderRoutingModule } from './mainslider-routing.module';
import { MainsliderComponent } from './mainslider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainsliderComponent],
  imports: [
    CommonModule,
    MainsliderRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainsliderModule { }
