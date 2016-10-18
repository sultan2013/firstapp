import { FirsappPage } from './app.po';

describe('firsapp App', function() {
  let page: FirsappPage;

  beforeEach(() => {
    page = new FirsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
