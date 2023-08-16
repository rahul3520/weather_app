import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  getCoordinates=(lat:any,lon:any)=>
  {

    const url = 'http://api.open-meteo.com/v1/forecast?';

    let queryParams = new HttpParams().append("latitude",lat).append("longitude",lon).append("current_weather",true);


    return this.http.get(url,{params:queryParams});
  }
}
