import { AshPortfolioSitePage } from './app.po';

describe('ash-portfolio-site App', () => {
  let page: AshPortfolioSitePage;

  beforeEach(() => {
    page = new AshPortfolioSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
