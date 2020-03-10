import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArchitectsService } from './architectsnote.service';

@Component({
  selector: 'app-architects-note',
  templateUrl: './architects-note.component.html',
  styleUrls: ['./architects-note.component.css'],
  providers:[ArchitectsService]
})
export class ArchitectsNoteComponent implements OnInit {
  ProjectArchitects: FormGroup

  constructor(private titlerouter:Router,private architectservice:ArchitectsService) {


    this.ProjectArchitects = new FormGroup({
      architecture_name: new FormControl('', Validators.required),
     // architects_image: new FormControl('',Validators.required),
      designation: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
   }

   sersignup: any;
   temp:string

  GoBackToOverviewPage(){
    this.titlerouter.navigate(['/overview'])
  }

  GoToLocationPage(){
    this.titlerouter.navigate(['/location'])
  }
  ngOnInit() {
  }


  public saveAction(data: any) {



    localStorage.setItem('key', data.mobileno);
    console.log(JSON.stringify(data));

    this.architectservice.saveAllArchitects(data).subscribe

      (
        res => {
        this.sersignup = res;

        },

        err => { this.sersignup = err }

      );


  }

}
