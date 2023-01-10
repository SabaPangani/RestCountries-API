import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class countriesService {

  constructor( private http: HttpClient) {}
  
  countries = [
    {
      countryFlag:"https://flagcdn.com/ma.svg",
      countryName:"Morocco",
      countryOfficialName:"المملكة المغربية",
      countryPopulation:"36,910,558",
      countryRegion:"Africa",
      countryCapital:"Rabat",
      subRegion:"Northern Africa",
      topLevelDomain:".ma, المغرب.",
      Currencies:"Moroccan dirham",
      Languages:"Arabic, Berber",
      borderCountries:['DZA','ESH','ESP']
    },
    {
      countryFlag:"https://flagcdn.com/ma.svg",
      countryName:"Georgia",
      countryOfficialName:"المملكة المغربية",
      countryPopulation:"36,910,558",
      countryRegion:"Africa",
      countryCapital:"Rabat",
      subRegion:"Northern Africa",
      topLevelDomain:".ma, المغرب.",
      Currencies:"Moroccan dirham",
      Languages:"Arabic, Berber",
      borderCountries:['DZA','ESH','ESP']
    },
    {
      countryFlag:"https://flagcdn.com/ma.svg",
      countryName:"America",
      countryOfficialName:"المملكة المغربية",
      countryPopulation:"36,910,558",
      countryRegion:"Africa",
      countryCapital:"Rabat",
      subRegion:"Northern Africa",
      topLevelDomain:".ma, المغرب.",
      Currencies:"Moroccan dirham",
      Languages:"Arabic, Berber",
      borderCountries:['DZA','ESH','ESP']
    },
  ]
   getCountries(){
    return this.countries;
  }

  getCountriesAPI(){
    return this.http.get('https://restcountries.com/v3.1/all');
  }
    
}
