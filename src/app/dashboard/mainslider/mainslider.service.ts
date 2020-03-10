import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MainSliderService {
  public registrationInfo: any
  constructor(private http: HttpClient) {
  }



  //Service: Insert record to the DB: @RequestMapping(path = "/createBuilder") //

  saveAllUser(data) {

    let url = ("http://localhost:8082/api/Marne/creatBuilder");
    return this.http.post(url, data);
  }

  uploadImages(event) {
    debugger
    let file =event;

    }

  //   getAllBookingById( fkid:any){
  //     let url="http://localhost:8082//api/Marne/getallbuilder"+fkid;
  //     return this.http.post(url,fkid);
  // }
}