import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';



@NgModule({
  declarations: [
    CountryPageComponent,
    ByNamePageComponent,
    ByRegionPageComponent,
    ByCapitalPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
  ]
})
export class CountriesModule { }
