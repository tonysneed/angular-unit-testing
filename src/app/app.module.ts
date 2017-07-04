import { NgModule } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureModule } from 'app/feature/feature.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { mockBackendFactory } from './feature/feature.module';
import { FeatureService } from './feature/feature.service';
import { MockBackendService } from './mock-backend/mock-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
