import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { PRODUCTS } from '../mock-backend/mock-products';
import { EnvironmentService } from '../shared/environment.service';
import { FeatureComponent } from './feature.component';
import { FeatureService } from './feature.service';

describe('FeatureComponent', () => {

  let mockHttp: Http;
  let component: FeatureComponent;
  let fixture: ComponentFixture<FeatureComponent>;

  beforeEach(async(() => {

    mockHttp = { get: null } as Http;
    spyOn(mockHttp, 'get').and.returnValue(Observable.of({
      json: () => PRODUCTS
    }));

    TestBed.configureTestingModule({
      declarations: [FeatureComponent],
      providers: [
        FeatureService,
        EnvironmentService,
        {
          provide: Http,
          useValue: mockHttp
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

  it('should render products in a table element', async(() => {
    fixture = TestBed.createComponent(FeatureComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table').textContent).toContain('Espresso');
    expect(compiled.querySelector('table').textContent).toContain('Macchiato');
    expect(compiled.querySelector('table').textContent).toContain('Americano');
  }));
});
