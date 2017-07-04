# Angular Unit Testing

_A sample app for Angular unit testing._

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Mock Back End

A mock back end service is used in lieu of a real back end service. This allows front end development to take place out of step with back end development.

The `MockBackendService` subscribes to connections on an injected `MockBackEnd` by sending responses to specific urls using mock objects.

There is a `CoreModule` that provides `Http` with the `MockBackend` so that http requests use the `MockBackendService`.

`AppComponent` bootstraps the `MockBackendService` by injecting it into the constructor, so that a new singleton instance of `MockBackendService` is created.

## Environment Service

There is an `EnvironmentService` with a `getApiUrl` method that returns the `apiUrl` property of **environment.ts**.

If you supply an `useMockApi` optional parameter set to `true`, then the service will return the `mockApiUrl` property of **environment.ts**, which points to the mock back end service.

## Service Tests

The service test (**feature.service.spec.ts**) demonstrates how to manually mock `Http` so that `get` requests return an observable of mock entities.

## Component Tests

The component test (**feature.component.spec.ts**) shows how test for mock entities that are rendered in an html table.
