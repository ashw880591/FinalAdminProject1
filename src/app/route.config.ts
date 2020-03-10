import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import {} from './dashboard/dashboard.module'
import { from } from 'rxjs'

export const route:Routes=[
    
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',loadChildren:'./login/login.module#LoginModule'},
{path:'dashboard',loadChildren:'./dashboard/dashboard.module#DashboardModule'}



]