import { TestLibPage } from './app.po';

describe('test-lib App', () => {
  let page: TestLibPage;

  beforeEach(() => {
    page = new TestLibPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
