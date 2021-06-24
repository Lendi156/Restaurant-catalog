/* eslint-disable no-underscore-dangle */
import drawerInitiator from '../Utils/drawer-initiator';
import postInitiator from '../Utils/post-initator';
import UrlParser from '../Routes/url-parser';
import routes from '../Routes/Routes';

class App {
  constructor({
    menu, hero, main, drawer, item, post,
  }) {
    this._menu = menu;
    this._item = item;
    this._main = main;
    this._hero = hero;
    this._drawer = drawer;
    this._post = post;

    this._initialAppShell();
    this._initialPostInitiator();
  }

  // eslint-disable-next-line no-underscore-dangle
  _initialAppShell() {
    drawerInitiator.initDraw({
      menu: this._menu,
      hero: this._hero,
      main: this._main,
      drawer: this._drawer,
      item: this._item,
    });
  }

  _initialPostInitiator() {
    postInitiator.initPost({
      post: this._post,
      main: this._main,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
