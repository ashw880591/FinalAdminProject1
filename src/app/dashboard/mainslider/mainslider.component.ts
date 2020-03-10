import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainSliderService } from './mainslider.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css'],
  providers: [MainSliderService]
})
export class MainsliderComponent implements OnInit {

  RegistrationForm: FormGroup
  public mainregistration: any;

  SessionBookingId: any;
  constructor(private servicemainslider: MainSliderService,private httpClient:HttpClient) {
    this.RegistrationForm = new FormGroup({
      tagline: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      project_name: new FormControl('', Validators.required),
      description1: new FormControl('', Validators.required),
      description2: new FormControl('', Validators.required),
      enquiry: new FormControl('', Validators.required),
      // image: new FormControl('',Validators.required),
      id:new FormControl()
    })
  }
  sersignup: any;
  temp:string


  
  sessionobj: any;
  responseobj: any;
  tempvar: any
  ngOnInit() {

   
  }
  public saveAction(data: any) {
    localStorage.setItem('key', data.id);
    console.log(JSON.stringify(data));

    this.servicemainslider.saveAllMainSlider(data).subscribe
      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );
  }



  uploadImages(event) {
    debugger
    let file = event.target.files[0];

    let formData = new FormData();
    formData.append('file', file);


    this.httpClient.post("http://localhost:8081/api/file/uploadImage", formData).subscribe(data => {

      let result = data;

    });

  }
}
