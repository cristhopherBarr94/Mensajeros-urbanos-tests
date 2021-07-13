import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  public country_id: any

  constructor(
    public activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.country_id = this.activeRoute.snapshot.params.id
    console.log(this.country_id);
    
  }

}
