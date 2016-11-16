import { Angular2BoilerplatePage } from './app.po';

describe('angular2-boilerplate App', function() {
  let page: Angular2BoilerplatePage;

  beforeEach(() => {
    page = new Angular2BoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
