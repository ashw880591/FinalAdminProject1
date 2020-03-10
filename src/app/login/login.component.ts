import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: FormGroup
  formsubmit: boolean = false;
  constructor( private route: Router) {

    this.loginModel = new FormGroup({
      emailid: new FormControl('ash@gmial.com', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
    })
  }
  GoToDashboardPage(){
    this.route.navigate(['/dashboard'])
  }

  ngOnInit() {
  }

}
