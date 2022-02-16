import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhoneDetails } from './details.interface';
import { Phone } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class PhonesService {



  constructor(
    private http: HttpClient
  ) { }



  getPhones():Observable<Phone[]> {
    const phones = this.http.get<Phone[]>("assets/phones/phones.json");


    return phones;

  }

  getProduct(id: String): any{
    const phone = this.http.get<Phone[]>("assets/phones/"+ id +".json");
    return phone;
  }

}
