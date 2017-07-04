import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { mockBackendFactory } from '../mock-backend/mock-backend-factory';
import { MockBackendService } from '../mock-backend/mock-backend.service';
import { EnvironmentService } from '../shared/environment.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MockBackendService,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: mockBackendFactory,
    },
    EnvironmentService
  ]
})
export class CoreModule { }
