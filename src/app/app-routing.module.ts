import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'app-view/:id',
    component: CountryDetailsComponent,
  },
  {
    path: '**',
    component:HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
