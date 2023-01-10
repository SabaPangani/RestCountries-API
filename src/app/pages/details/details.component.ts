import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { countriesService } from 'src/app/Services/service.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  // countries:any [];

  apiCountry:any = {};
  countryName:any;
  constructor(private route:ActivatedRoute,private _api:countriesService){
  //   route.queryParams.forEach((param) =>{
  //     this.queryParams = param;
  //     console.log(this.queryParams.name)
  //   })

  //   this.chosenCountry = this.countries.find((x:any) => {
  //    return x.countryName == this.queryParams.name;
  //   })
    
  //   console.log(this.chosenCountry)
  this.countryName = route.snapshot.params['name'];

    this._api.getCountriesAPI().subscribe((response:any) =>{
      this.apiCountry = response.find((country:any) => {
        return country.name.common == this.countryName;
      })
      console.log(this.apiCountry)
    })

    // this.countries = this._api.getCountries()
    // setTimeout(() => {
    //   console.log(this.apiCountry);
    // }, 2000);

  //   this.countries = this._api.getCountries();
  
  // this.chosenCountry = this.apiCountry.find((country:any) =>{
  //   return country.name.common = this.countryName;
  // })
  // this.chosenCountry = this.apiCountry.find((country:any)=>{
  //   return country.name.common = this.countryName;
  // })
  // console.log(this.chosenCountry)
  }
}

// private queryParams: any;

// chosenProduct:any = {};

// constructor(private route:ActivatedRoute){
  
//   route.queryParams.forEach(param =>{
//     this.queryParams = param;
//   })
    
//   this.chosenProduct = this.products.find((product) => {
//    return product.productId == this.queryParams.id;
//   })
  
//   console.log(this.chosenProduct)
  
// }