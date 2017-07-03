import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';
import { MockBackendService } from '../mock-backend/mock-backend.service';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [FeatureComponent],
  providers: [
    FeatureService,
    MockBackendService,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: mockBackendFactory,
    }
  ]
})
export class FeatureModule { }

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}
