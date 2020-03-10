import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FloorPlanService } from './floorplan.service';

@Component({
  selector: 'app-floor-plans',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css'],
  providers:[FloorPlanService]
})
export class FloorPlansComponent implements OnInit {
  ProjectFloorPlan: FormGroup

  constructor(private route:Router,private floorplanservice:FloorPlanService,private httpClient:HttpClient) { 

    this.ProjectFloorPlan = new FormGroup({
      architecture_name: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

//image uoloade

title ='ImageUploadeFrontEnd';

public selectedFile;
public event1;
imgURL:any;
base64Data:any;
convertedImage:any;

public onFileChanged(event){
  console.log(event);

  this.selectedFile = event.target.files[0];

  // Below part is used to display the selected image
  let reader = new FileReader();

  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2)=>{
    this.imgURL = reader.result;
  };
}
// this part is for uploading

onUploade(){
  const uploadeData = new FormData();
  uploadeData.append('myFile',this.selectedFile,this.selectedFile.name);
  
}


  sersignup: any;
  temp:string




GoToSpecificaytionPage(){
  this.route.navigate(['/specification'])
}
GoBackToMasterPlanPage(){
  this.route.navigate(['/masterplan'])
}
  ngOnInit() {
  }




  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.floorplanservice.saveAllFloorPlan(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }
}
