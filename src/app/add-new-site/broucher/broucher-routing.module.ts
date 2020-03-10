import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroucherComponent } from './broucher.component';


const routes: Routes = [
  { path: '', component: BroucherComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BroucherRoutingModule { }
