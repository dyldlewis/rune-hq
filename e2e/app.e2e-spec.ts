import { RuneHqPage } from './app.po';

describe('rune-hq App', () => {
  let page: RuneHqPage;

  beforeEach(() => {
    page = new RuneHqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
