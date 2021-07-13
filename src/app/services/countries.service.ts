import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _countries: any[] = [];
  private _countriesSbj = new Subject<any[]>();
  public countries$ = this._countriesSbj.asObservable();
  constructor(private http: HttpService) { }

  getData(){
    this.http.get(environment.serverUrl + environment.countries.getAll).subscribe((response:any) => {
      if (response.status == 200) {
        this._countries = response.body;
        this._countriesSbj.next(this._countries);
      } else {
        // TODO :: logic for error
      } 
      });
  }

  getByRegion(region:string){
    this.http.get(environment.serverUrl + environment.countries.getByRegion+ region).subscribe((response:any) => {
      if (response.status == 200) {
        this._countries = response.body;
        this._countriesSbj.next(this._countries);
      } else {
        // TODO :: logic for error
      } 
      });
  }

  getByCode(code:string){
    this.http.get(environment.serverUrl + environment.countries.getByCode+ code).subscribe((response:any) => {
      if (response.status == 200) {
        this._countries = response.body;
        this._countriesSbj.next(this._countries);
      } else {
        // TODO :: logic for error
      } 
      });
  }
}
