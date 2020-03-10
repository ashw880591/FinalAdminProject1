import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationAndContactComponent } from './locationandcontactdetails.component';


const routes: Routes = [
  { path: '', component: LocationAndContactComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationAndContactRoutingModule { }
