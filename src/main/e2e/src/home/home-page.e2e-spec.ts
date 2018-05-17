import {AppConfig} from '../../../../../src/main/angular-app/app/config/app.config';
import {HomePage} from './home-page';

describe('Home page', function () {
  let page;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should contains heroes limit', () => {
    HomePage.navigateTo();
    expect<any>(HomePage.getNumberHeroes()).toBe(AppConfig.topHeroesLimit);
  });
});
