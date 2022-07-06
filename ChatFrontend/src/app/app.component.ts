import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiTestService } from './services/api-test.service';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChatFrontend';
  weather: Observable<string>;

  constructor(private apa: ApiTestService ) {
    this.weather = apa.GetWeatherForcast().pipe( delay(5000) );
  }
}
