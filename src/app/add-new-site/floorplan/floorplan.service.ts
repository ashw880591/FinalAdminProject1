import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()

export class FloorPlanService{
    public registrationInfo: any

    constructor(private http :HttpClient){

    }
    saveAllFloorPlan(data) {

        let url = ("http://localhost:8082/api/Marne/createProjectArchitectureNote");
        return this.http.post(url, data);
      }
}