import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {} from './dashboard/dashboard.module'

export const route:Routes=[
    
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',loadChildren:'./login/login.module#LoginModule'},
{path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'},
{path:'addNewSite',loadChildren:'./add-new-site/add-new-site.module#AddNewSiteModule'}



]