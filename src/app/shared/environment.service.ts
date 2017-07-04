import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentService {

  getApiUrl(useMockApi?: boolean): string {
    if (useMockApi) {
      return environment.mockApiUrl;
    }
    return environment.apiUrl;
  }

  constructor() { }
}
