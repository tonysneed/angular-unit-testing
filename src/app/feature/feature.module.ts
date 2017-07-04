import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';
import { MockBackendService } from '../mock-backend/mock-backend.service';
import { CoreModule } from './../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    CoreModule
  ],
  declarations: [FeatureComponent],
  providers: [
    FeatureService
  ]
})
export class FeatureModule { }
