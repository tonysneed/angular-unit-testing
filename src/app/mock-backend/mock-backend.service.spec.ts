import 'rxjs/add/operator/map';

import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { PRODUCTS } from 'app/mock-backend/mock-products';

import { environment } from '../../environments/environment';
import { MockBackendService } from '../mock-backend/mock-backend.service';
import { Product } from '../shared/product';

describe('MockBackenbdService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackendService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
        }
      ]
    });
  });

  beforeEach(inject([MockBackendService], () => { }));

  it('should be created', inject([MockBackendService], (service: MockBackendService) => {
    expect(service).toBeTruthy();
  }));

  describe('api/products', () => {

    it('should return all products', fakeAsync(inject([Http], (http: Http) => {

      const actualProducts = [new Product(), new Product(), new Product()];
      const productsUrl = `${environment.mockApiUrl}products`;
      http.get(productsUrl)
        .map(response => response.json())
        .subscribe(result => convertObjects(result, actualProducts));

      tick();
      expect(actualProducts).toEqual(PRODUCTS);
    })));
  });

  function convertObjects<Target>(objects: Object[], types: Target[]) {
    for (let i = 0; i < objects.length; i++) {
      Object.assign(types[i], objects[i])
    }
  }
});
