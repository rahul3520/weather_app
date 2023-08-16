import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  constructor(private api:ApiService){}

  title = 'my-app';

  latitude:any="";
  lat:any="";

  longitude:any="";
  lon:any="";

  repos:any="";
  current_weather:any=""
  temperature:any=""
  windspeed:any=""
  winddirection:any=""

  findWeather(location:any)
  {


    this.lat=location;
    console.log(this.lat)

    this.lon=location;
    console.log(this.lon)

    this.api.getCoordinates(this.lat,this.lon).subscribe((response:any) =>
    {
      this.repos=response;
      console.log(this.repos.current_weather);

      this.temperature=this.repos.current_weather.temperature
      this.windspeed=this.repos.current_weather.windspeed
      this.winddirection=this.repos.current_weather.winddirection

    })
  }

}





