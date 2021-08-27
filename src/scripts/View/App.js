/* eslint-disable no-underscore-dangle */
import drawerInitiator from '../Utils/drawer-initiator';
import restaurantPostInitiator from '../Utils/restaurantPost-initator';
import UrlParser from '../Routes/url-parser';
import routes from '../Routes/Routes';

class App {
  constructor({
    menu, nav, main, drawer, item, restaurantPost,
  }) {
    this._menu = menu;
    this._item = item;
    this._main = main;
    this._nav = nav;
    this._drawer = drawer;
    this._restaurantPost = restaurantPost;

    this._initialAppShell();
    this._initialPostInitiator();
  }

  // eslint-disable-next-line no-underscore-dangle
  _initialAppShell() {
    drawerInitiator.initDraw({
      menu: this._menu,
      nav: this._nav,
      main: this._main,
      drawer: this._drawer,
      item: this._item,
    });
    document.body.addEventListener('scroll', () => {
      const tes = document.body.scrollTop;
      const head = document.querySelector('.header');
      if (tes !== 0) {
        head.style.top = '-100px';
      } else {
        head.style.top = '0px';
      }
    });
  }

  _initialPostInitiator() {
    restaurantPostInitiator.initRestaurantPost({
      restaurantPost: this._restaurantPost,
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
