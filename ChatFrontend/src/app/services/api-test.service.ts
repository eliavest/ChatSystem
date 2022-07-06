import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

    constructor( 
        private http: HttpClient 
    ) { } 

  GetWeatherForcast(): Observable<string> {
      return this.http.get<string>("/api/WeatherForecast");
  }

}
