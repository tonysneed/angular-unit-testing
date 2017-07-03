import 'rxjs/add/operator/map';

import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Rx';

import { MockBackendService } from '../mock-backend/mock-backend.service';
import { Product } from '../shared/product';
import { PRODUCTS } from 'app/mock-backend/mock-products';

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

  beforeEach(inject([MockBackendService], (service: MockBackendService) => {
    service.start();
  }));

  it('should be created', inject([MockBackendService], (service: MockBackendService) => {
    expect(service).toBeTruthy();
  }));

  describe('api/products', () => {

    it('should return all products', fakeAsync(inject([Http], (http: Http) => {

      const actualProducts = [new Product(), new Product(), new Product()];
      const productsUrl = 'http://localhost:8080/api/products';
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
