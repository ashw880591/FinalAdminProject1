import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class OverviewService{
    public registrationInfo: any

    constructor(private http: HttpClient){
        
    }
    
  saveAllTitle(data) {

    let url = ("http://localhost:8082/api/Marne/createProjectOverview");
    return this.http.post(url, data);
  }
}