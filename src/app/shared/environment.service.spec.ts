import { TestBed, inject } from '@angular/core/testing';

import { environment } from '../../environments/environment';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentService]
    });
  });

  it('should be created',
    inject([EnvironmentService], (service: EnvironmentService) => {

      expect(service).toBeTruthy();
    }));

  describe('getApiUrl', () => {

    it('should return api url',
      inject([EnvironmentService], (service: EnvironmentService) => {

        const apiUrl = service.getApiUrl();
        expect(apiUrl).toEqual(environment.apiUrl);
      }));

    it('should return mock api url when passed true',
      inject([EnvironmentService], (service: EnvironmentService) => {

        const apiUrl = service.getApiUrl(true);
        expect(apiUrl).toEqual(environment.mockApiUrl);
      }));
  });
});
