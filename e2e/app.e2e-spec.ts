import { AngularRouteTestingPage } from './app.po';

describe('angular-route-testing App', () => {
  let page: AngularRouteTestingPage;

  beforeEach(() => {
    page = new AngularRouteTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
