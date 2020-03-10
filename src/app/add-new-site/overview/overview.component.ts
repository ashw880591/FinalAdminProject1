import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { OverviewService } from './overview.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers:[OverviewService]
})
export class OverviewComponent implements OnInit {
  ProjectOverview: FormGroup

  constructor(private router:Router,private overviewservice:OverviewService) {

    this.ProjectOverview = new FormGroup({
      header_line1: new FormControl('', Validators.required),
      header_line2: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })

   }
   sersignup: any;
   temp:string

  GoBackToTitlePage(title){
    this.router.navigate(['/title'])
  }

  GoToArchitectsNotePage(){
    this.router.navigate(['/architects'])
  }
  ngOnInit() {
  }
  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.overviewservice.saveAllTitle(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }
}
