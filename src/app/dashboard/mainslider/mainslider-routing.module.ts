import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainsliderComponent } from './mainslider.component';


const routes: Routes = [
  {path:'',component:MainsliderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainsliderRoutingModule { }
