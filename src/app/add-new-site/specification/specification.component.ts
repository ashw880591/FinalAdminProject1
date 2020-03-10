import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpecificationService } from './specification.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.css'],
  providers:[SpecificationService]
})
export class SpecificationsComponent implements OnInit {
  ProjectSpecification: FormGroup

  constructor(private route:Router,private specificationservice:SpecificationService) {
    this.ProjectSpecification = new FormGroup({
      specification1: new FormControl('', Validators.required),
      specification2: new FormControl('', Validators.required),
      specification3: new FormControl('', Validators.required),
      specification4: new FormControl('', Validators.required),
      specification5: new FormControl('', Validators.required),
      specification6: new FormControl('', Validators.required),
    })

   }


   sersignup: any;
   temp:string
GoToBroucherPage(){
  this.route.navigate(['/broucher'])
}
GoBackToFloorPlanPage(){
  this.route.navigate(['/floorplan'])
}
  ngOnInit() {
  }


  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.specificationservice.saveAllSpecification(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }
}
