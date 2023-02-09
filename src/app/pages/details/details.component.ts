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
  countryName:string;
  constructor(private route:ActivatedRoute,private _api:countriesService){
    
  this.countryName = route.snapshot.params['name'];

    this._api.getCountriesAPI().subscribe((response:any) =>{
      this.apiCountry = response.find((country:any) => {
        return country.name.common == this.countryName;
      })
      console.log(this.apiCountry)
    })
  }
}

