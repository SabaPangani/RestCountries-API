import { Component, Input } from '@angular/core';
import { countriesService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  countries:any = [];
  oldCountries = [];
  filteredCountries:any = []
  search:string = '';
  showFiltered = false;

  constructor(private _countriesService:countriesService, private _api:countriesService){

    this._api.getCountriesAPI().subscribe((response) =>{
      this.countries = response;
      this.filteredCountries = [...this.countries]
      console.log(this.countries);
    })
  }

  Search(value:string){
    this.filteredCountries = [...this.countries]

    if (value != ""){
      this.showFiltered = true;
    }else{
      this.showFiltered = false;
    }

    this.search = value.toLowerCase();
    this.filteredCountries = this.filteredCountries.filter((country:any)=>{
      return country.name.common.toLowerCase().includes(this.search);
    })
  }
  regions = "All Africa Americas Asia Europe Oceania".split(' ');

  filterRegion(newValue:any){
    this.filteredCountries = [...this.countries]
    console.log(newValue.value)

    if (newValue.value != "All"){
      this.showFiltered = true;
    }else{
      this.showFiltered = false;
    }
   
   this.filteredCountries = this.filteredCountries.filter((country:any) =>{
    return country.region === newValue.value;
   })
  }

  

}