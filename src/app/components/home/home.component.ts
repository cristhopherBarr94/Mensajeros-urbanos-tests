import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{
  private countrySubs: Subscription;
  public country_list: any[] = [];
  public country_filtered: any[] = [];
  public region_list: any[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public filterCountry = '';
  public switchMode:boolean;

  constructor(private router: Router, private countriesService: CountriesService) { }

  ngOnInit(): void {
    let mode = localStorage.getItem('darkMode');
    if(mode =='enabled'){
      this.switchMode = true;
    }else{ 
      this.switchMode = false;
    }
   this.getData();  
  }

  getData(){
    this.countrySubs = this.countriesService.countries$.subscribe((countries) => {     
      this.country_list = countries;
      this.country_filtered = this.country_list;
    })
    ;
    this.countriesService.getData();  
  }

   search(){
        const countryResult = []
        for(const country of this.country_list){
          if(country.name.toLowerCase().indexOf(this.filterCountry.toLowerCase())>-1){
            countryResult.push(country);
            this.country_filtered = countryResult;
          }
        }
   }
   

   readRegionSelected(region: string){
     this.countrySubs = this.countriesService.countries$.subscribe((countriesByRegions) => {     
      this.country_list = countriesByRegions;
    })
    ;
    this.countriesService.getByRegion(region);  

   }

  redirectTo(id:any){
    this.router.navigate([`country-details/${id}`], {
      queryParamsHandling: 'preserve',
    });
  }

  ngOnDestroy(){
    this.countrySubs.unsubscribe();
  }
}
