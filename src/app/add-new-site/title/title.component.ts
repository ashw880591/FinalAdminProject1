import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleService } from './title.service';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  providers: [TitleService]
})
export class TitleComponent implements OnInit {
  ProjectTitle: FormGroup
  constructor(private titlerouter: Router, private Titleservicecreate: TitleService) {
    this.ProjectTitle = new FormGroup({
      site_name: new FormControl('', Validators.required),
      project_name: new FormControl('', Validators.required),
      site_location: new FormControl('', Validators.required),
      maha_rera_reg_no: new FormControl('', Validators.required),
       credai_member_reg_no: new FormControl('', Validators.required),
      site_apartment_type: new FormControl('', Validators.required),
      // image: new FormControl('',Validators.required),
    })
  }

  sersignup: any;
  temp: string
  // GoToOverviewPage(){
  //   this.titlerouter.navigate(['/overview'])
  // }
  ngOnInit() {
  }
  public saveAction(data: any) {
    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.Titleservicecreate.saveAllTitle(data).subscribe
      (
        res => {
        this.sersignup = res;
        },
        err => { this.sersignup = err }
      );
  }
}
