import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { EnvironmentService } from '../shared/environment.service';
import { Product } from '../shared/product';

@Injectable()
export class FeatureService {

  apiUrl: string;

  constructor(private http: Http, private environment: EnvironmentService) {
    this.apiUrl = environment.getApiUrl(true);
   }

  getProducts(): Observable<Product[]> {
    const productsUrl = `${this.apiUrl}products`;
    return this.http.get(productsUrl)
      .map(response => response.json());
  }
}
