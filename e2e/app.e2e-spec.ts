import { Prueba3Page } from './app.po';

describe('prueba3 App', function() {
  let page: Prueba3Page;

  beforeEach(() => {
    page = new Prueba3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
