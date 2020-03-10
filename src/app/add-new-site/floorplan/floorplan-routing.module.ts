import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorPlansComponent } from './floorplan.component';


const routes: Routes = [
  { path: '', component: FloorPlansComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorPlanRoutingModule { }
