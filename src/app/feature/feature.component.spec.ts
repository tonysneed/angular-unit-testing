import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { MockBackendService } from '../mock-backend/mock-backend.service';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';
import { mockBackendFactory } from '../mock-backend/mock-backend-factory';

describe('FeatureComponent', () => {

  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
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
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a p tag', async(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('feature works!');
  }));
});
