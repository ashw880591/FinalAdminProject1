import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MasterPlanService{
    public registrationInfo: any

    constructor(private http:HttpClient){

    }

    saveAllMasterPlan(data) {

        let url = ("http://localhost:8082/api/Marne/createProjectMasterPlan");
        return this.http.post(url, data);
      }
}