import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainSliderService } from './mainslider.service';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css'],
  providers:[MainSliderService]
})
export class MainsliderComponent implements OnInit {

  RegistrationForm: FormGroup
  public mainregistration: any;

  constructor(private servicemainslider: MainSliderService) {


    this.RegistrationForm = new FormGroup({
      tagline: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description1: new FormControl('', Validators.required),
      description2: new FormControl('', Validators.required),
      projectname: new FormControl('', Validators.required),
        enquiry: new FormControl('',Validators.required),
      // image: new FormControl('',Validators.required),
    })
  }

  ngOnInit() {
  }

}
