import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewSiteComponent } from './add-new-site.component';
const routes: Routes = [
  { path: '', component: AddNewSiteComponent },
  { path: 'title', loadChildren: './title/title.module#TitleModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
  { path: 'architects', loadChildren: './architectsnote/architectsnote.module#ArchitectsModule'},
  { path: 'location', loadChildren: './locationandcontactdetails/locationandcontactdetails.module#LocationModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule'},
  { path: 'masterplan', loadChildren: './masterplan/masterplan.module#MasterModule'},
  { path: 'floorplan', loadChildren: './floorplan/floorplan.module#FloorPlanModule' },
  { path: 'specification', loadChildren: './specification/specification.module#SpecificationModule'},
  { path: 'broucher', loadChildren: './broucher/broucher.module#BroucherModule'},
  // {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewSiteRoutingModule { }
