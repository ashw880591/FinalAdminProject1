import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterPlanService } from './master.service';

@Component({
  selector: 'app-master-plan',
  templateUrl: './master-plan.component.html',
  styleUrls: ['./master-plan.component.css'],
  providers:[MasterPlanService]
})
export class MasterPlanComponent implements OnInit {
  Projectmasterplan: FormGroup

  constructor(private route:Router,private masterplan:MasterPlanService) { 

    this.Projectmasterplan = new FormGroup({
      speciFication1: new FormControl('', Validators.required),
      speciFication2: new FormControl('', Validators.required),
      speciFication3: new FormControl('', Validators.required),
      speciFication4: new FormControl('', Validators.required),
      speciFication5: new FormControl('', Validators.required),
      speciFication6: new FormControl('', Validators.required),
      speciFication7: new FormControl('', Validators.required),
      speciFication8: new FormControl('', Validators.required),
      speciFication9: new FormControl('', Validators.required),
      speciFication10: new FormControl('', Validators.required),
      speciFication11: new FormControl('', Validators.required),
      speciFication12: new FormControl('', Validators.required),

    })
  }
  sersignup: any;
  temp:string
  GoToFloorPlanPage(){
    this.route.navigate(['/floorplan'])
  }
  GoBackToGalleryPage(){
    this.route.navigate(['/gallery'])
  }
  ngOnInit() {
  }
  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.masterplan.saveAllMasterPlan(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }
}
