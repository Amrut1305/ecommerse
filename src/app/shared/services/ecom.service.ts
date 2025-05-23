import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class EcomService {
  BASE_URL: string = environment.base_url
  PRODUCT_URL: string = `${this.BASE_URL}/products`

  getPagiData$ : Subject<Array<Iproduct>> = new Subject<Array<Iproduct>>()
  
  constructor(
    private _http: HttpClient,
  ) {}

  fetchAllData(page:number, limit:number): Observable<Array<Iproduct>> {
    return this._http.get<Array<Iproduct>>(`${this.PRODUCT_URL}?page=${page}&limit=${limit}`)
  }

  getPaginationData(): Observable<Array<Iproduct>>{
    return this._http.get<Array<Iproduct>>(`${this.PRODUCT_URL}`)
  }

  getCatData(cat: string | null): Observable<Array<Iproduct>> {
  if (cat) {
    return this._http.get<Array<Iproduct>>(`${this.PRODUCT_URL}/${cat}`);
  } else {
    return EMPTY; // returns an empty observable, avoids errors
  }
}

}
