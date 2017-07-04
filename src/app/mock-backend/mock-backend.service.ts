import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { environment } from '../../environments/environment';
import { PRODUCTS } from './mock-products';

@Injectable()
export class MockBackendService {

  constructor(private backend: MockBackend) {
    this.start();
   }

  private start(): void {
    this.backend.connections.subscribe((c: MockConnection) => {

      const url = `${environment.mockApiUrl}products`;
      const idRegex = /\/api\/products\/([0-9]+)/i;

      if (c.request.url === url && c.request.method === 0) {
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(PRODUCTS)
        })));
      } else if (c.request.url.match(idRegex) && c.request.method === 0) {
        const matches = PRODUCTS.filter((product) => {
          return product.ProductId === +(c.request.url.match(idRegex)[1])
        });
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(matches[0])
        })));
      }
    });
  }
}
