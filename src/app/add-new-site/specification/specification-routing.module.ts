import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecificationsComponent } from './specification.component';


const routes: Routes = [
  { path: '', component: SpecificationsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecificationRoutingModule { }
