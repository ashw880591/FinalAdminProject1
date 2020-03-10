import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class BroucherService{
    public registrationInfo: any

    constructor(private http:HttpClient){

    }

    saveAllBroucher(data) {

        let url = ("http://localhost:8082/api/Marne/createProjectBroucher");
        return this.http.post(url, data);
      }
}