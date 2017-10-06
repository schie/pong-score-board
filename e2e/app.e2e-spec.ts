import { PongScoreBoardPage } from './app.po';

describe('pong-score-board App', () => {
  let page: PongScoreBoardPage;

  beforeEach(() => {
    page = new PongScoreBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
