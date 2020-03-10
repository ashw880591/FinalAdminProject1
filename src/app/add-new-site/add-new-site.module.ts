import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewSiteComponent } from './add-new-site.component';
import { AddNewSiteRoutingModule } from './add-new-ste-routing.module';

@NgModule({
  declarations: [AddNewSiteComponent],
  imports: [
    CommonModule,
    AddNewSiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddNewSiteModule { }
