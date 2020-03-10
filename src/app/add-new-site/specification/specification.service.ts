import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SpecificationService{
    public registrationInfo: any

    constructor(private http:HttpClient){
        
    }
    saveAllSpecification(data) {

        let url = ("http://localhost:8082/api/Marne/createProjectSpecification");
        return this.http.post(url, data);
      }
}