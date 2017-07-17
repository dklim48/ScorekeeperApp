import { ScorekeeperPage } from './app.po';

describe('scorekeeper App', () => {
  let page: ScorekeeperPage;

  beforeEach(() => {
    page = new ScorekeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
