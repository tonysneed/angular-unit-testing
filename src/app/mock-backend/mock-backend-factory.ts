import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
  return new Http(backend, options);
}
