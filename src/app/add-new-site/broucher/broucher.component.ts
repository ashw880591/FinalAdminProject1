import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BroucherService } from './broucher.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-broucher',
  templateUrl: './broucher.component.html',
  styleUrls: ['./broucher.component.css'],
  providers:[BroucherService]
})
export class BroucherComponent implements OnInit {
  ProjectBroucher: FormGroup

  constructor(private route:Router,private broucher:BroucherService,private httpClient:HttpClient) { 
    this.ProjectBroucher = new FormGroup({
     uploade_broucher: new FormControl('', Validators.required),
     unable_desclaimer: new FormControl('', Validators.required),
    })

  }
  sersignup: any;
   temp:string
GoBackToSpecificationPage(){
  this.route.navigate(['/specification'])
}
  ngOnInit() {
  }

public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.broucher.saveAllBroucher(data).subscribe

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

    debugger
    this.httpClient.post("http://localhost:8081/api/Marne/uploadFile", formData).subscribe(data => {

      let result = data;

    });



  }

}
