import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectsNoteComponent } from './architectsnote.component';


const routes: Routes = [
  { path: '', component: ArchitectsNoteComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectsRoutingModule { }
