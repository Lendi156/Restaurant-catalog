/* eslint-disable no-underscore-dangle */
const drawerInitiator = {
  initDraw({
    menu, nav, main, drawer, item,
  }) {
    menu.addEventListener('click', (event) => {
      this._clickToOpenDrawer(event, drawer, menu);
    });

    menu.addEventListener('keyup', (event) => {
      this._enterToOpenEscapeToCloseDrawer(event, drawer, menu);
    });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < item.length; i++) {
      item[i].addEventListener('keyup', (event) => {
        this._escapeToCloseDrawerWhileFocus(event, drawer, menu);
      });
    }

    nav.addEventListener('click', () => {
      this._clickHeroToCloseDrawer(drawer, menu);
    });

    main.addEventListener('click', () => {
      this._clickMainToCloseDrawer(drawer, menu);
    });
  },

  _clickToOpenDrawer(event, drawer, menu) {
    drawer.classList.add('open');
    drawer.classList.add('open');
    event.stopPropagation();
    menu.setAttribute('aria-expanded', 'true');
  },

  _enterToOpenEscapeToCloseDrawer(event, drawer, menu) {
    if (event.keyCode === 13) {
      event.preventDefault();
      drawer.classList.add('open');
      menu.setAttribute('aria-expanded', 'true');
    } else if (event.keyCode === 27) {
      event.preventDefault();
      drawer.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  },

  _escapeToCloseDrawerWhileFocus(event, drawer, menu) {
    if (event.keyCode === 27) {
      event.preventDefault();
      drawer.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }
  },

  _clickHeroToCloseDrawer(drawer, menu) {
    drawer.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  },

  _clickMainToCloseDrawer(drawer, menu) {
    drawer.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  },
};

export default drawerInitiator;
