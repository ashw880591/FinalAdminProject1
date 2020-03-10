import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddNewSiteComponent } from './add-new-site.component';

const routes: Routes = [
  { path: '', component: AddNewSiteComponent },
  { path: 'title', loadChildren: './title/title.module#TitleModule' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewModule' },
  { path: 'architects', loadChildren: './architects-note/architects.module#ArchitectsModule' },
  { path: 'location', loadChildren: './location-and-contact/location.module#LocationModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
  { path: 'masterplan', loadChildren: './master-plan/master-plan.module#MasterModule' },
  { path: 'floorplan', loadChildren: './floor-plans/floor-plan-module#FloorPlanModule' },
  { path: 'specification', loadChildren: './specifications/specification.module#SpecificationModule' },
  { path: 'broucher', loadChildren: './broucher/broucher.module#BroucherModule' },
  // {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewSiteRoutingModule { }
