import { BlueBookPage } from './app.po';

describe('blue-book App', function() {
  let page: BlueBookPage;

  beforeEach(() => {
    page = new BlueBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
