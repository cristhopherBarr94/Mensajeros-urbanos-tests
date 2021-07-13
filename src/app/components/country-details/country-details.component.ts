import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnDestroy {
  private singleCountrySubs: Subscription;
  public country_id: any;
  public country:any;
  public flagImg: string = '';

  constructor(
    public activeRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.country_id = this.activeRoute.snapshot.params.id
    this.getData()
  }
  getData(){
    this.singleCountrySubs = this.countriesService.countries$.subscribe((single) => {     
      this.country = single;
      this.flagImg = this.country.flag
    })
    ;
    this.countriesService.getByCode(this.country_id);  
    
  }
  
  redirectTo(id:any){
    this.router.navigate([`country-details/${id}`], {
      queryParamsHandling: 'preserve',
    });
    setTimeout(() => {
      window.location.reload()
    },500)
  }

  goBack(){
    this.router.navigate([``]);
  }

  ngOnDestroy(){
    this.singleCountrySubs.unsubscribe();
  }
}
