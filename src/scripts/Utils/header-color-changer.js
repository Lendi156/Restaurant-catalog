/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const headerColorChanger = {
  initHeaderColorChanger({
    headerContainer, hero, menus, menuButton, menuHover, main,
  }) {
    const checkingPageFromContentTitle = document.body.contains(hero);
    this._changeHeaderColor(
      headerContainer, checkingPageFromContentTitle, menus, menuButton, menuHover, main,
    );
  },

  _changeHeaderColor(
    headerContainer, checkingPageFromContentTitle, menus, menuButton, menuHover, main,
  ) {
    if (checkingPageFromContentTitle) {
      main.classList.remove('mainNonHome');
      main.classList.add('mainHome');
      headerContainer.style.borderBottomColor = 'white';
      headerContainer.classList.remove('nonHome');
      menuButton.classList.remove('nonHome');
      headerContainer.classList.add('home');
      menuButton.classList.add('home');
      menus.forEach((menu) => {
        menu.classList.remove('nonHome');
        menu.classList.add('home');
        menu.addEventListener('mouseover', () => {
          menu.style.color = 'black';
        });
        menu.addEventListener('mouseout', () => {
          menu.style.color = '';
        });
      });
      menuHover.forEach((hover) => {
        hover.addEventListener('mouseover', () => {
          hover.style.backgroundColor = 'white';
        });
        hover.addEventListener('mouseout', () => {
          hover.style.backgroundColor = '';
        });
      });
    } else {
      main.classList.remove('mainHome');
      main.classList.add('mainNonHome');
      headerContainer.style.borderBottomColor = 'black';
      headerContainer.classList.remove('home');
      menuButton.classList.remove('home');
      headerContainer.classList.add('nonHome');
      menuButton.classList.add('nonHome');

      menus.forEach((menu) => {
        menu.classList.remove('home');
        menu.classList.add('nonHome');
        menu.addEventListener('mouseover', () => {
          menu.style.color = 'white';
        });
        menu.addEventListener('mouseout', () => {
          menu.style.color = '';
        });
      });

      menuHover.forEach((hover) => {
        hover.addEventListener('mouseover', () => {
          hover.style.backgroundColor = 'black';
        });
        hover.addEventListener('mouseout', () => {
          hover.style.backgroundColor = '';
        });
      });
    }
  },
};

export default headerColorChanger;
