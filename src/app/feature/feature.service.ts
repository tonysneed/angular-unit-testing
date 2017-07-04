import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Product } from '../shared/product';


@Injectable()
export class FeatureService {

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
    const productsUrl = 'http://localhost:8080/api/products';
    return this.http.get(productsUrl)
      .map(response => response.json());
  }
}
