import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Product } from '../shared/product';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit, OnDestroy {

  products: Product[];
  subscription: Subscription;

  constructor(private service: FeatureService) { }

  ngOnInit() {
    this.subscription = this.service.getProducts()
      .subscribe(result => {
        this.products = result;
      },
      error => {
        console.log(error)
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
