import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoactionAndContactDetailsService } from './locationandcontactdetails.service';

@Component({
  selector: 'app-location-and-contact',
  templateUrl: './locationandcontactdetails.component.html',
  styleUrls: ['./locationandcontactdetails.component.css'],
  providers:[LoactionAndContactDetailsService]
})
export class LocationAndContactComponent implements OnInit {
  ProjectLocation: FormGroup

  constructor(private route:Router,private locationserivce:LoactionAndContactDetailsService) {

    this.ProjectLocation = new FormGroup({
      address_line: new FormControl('', Validators.required),
      airport: new FormControl('', Validators.required),
      hospitals: new FormControl('', Validators.required),
      movie_theater: new FormControl('', Validators.required),
      bus_stop: new FormControl('', Validators.required),
      petrol_pumps: new FormControl('', Validators.required),
      shopping_mall: new FormControl('', Validators.required),
      railway_station: new FormControl('', Validators.required),
      banks_and_atms: new FormControl('', Validators.required),
      groceries: new FormControl('', Validators.required),
      schools_and_colleges: new FormControl('', Validators.required),
    })
   }
   sersignup: any;
   temp:string
  GoToGalleryPage(){
    this.route.navigate(['/gallery'])
  }
  GoBackToLoactionPage(){
    this.route.navigate(['/architects'])
  }
  ngOnInit() {
  }
  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.locationserivce.saveAllLocationAndContactDetails(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }

}
