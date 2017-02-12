import { MainDirectoryPage } from './app.po';

describe('main-directory App', function() {
  let page: MainDirectoryPage;

  beforeEach(() => {
    page = new MainDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
