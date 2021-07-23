/* eslint-disable no-underscore-dangle */

const restaurantPostInitiator = {
  initRestaurantPost({ restaurantPost, main }) {
    this._expandRestaurantPost(restaurantPost, main);
  },

  _expandRestaurantPost(restaurantPost, main) {
    restaurantPost.forEach((pos) => {
      const deskripsi = pos.querySelector('.restaurantPost-item_content > .deskripsi');
      pos.addEventListener('keyup', (event) => {
        if (event.keyCode === 9) {
          deskripsi.classList.add('deskripsi_new');
          pos.setAttribute('aria-expanded', 'true');
        }
      });

      pos.addEventListener('keydown', (event) => {
        if (event.keyCode === 9) {
          deskripsi.classList.remove('deskripsi_new');
          pos.setAttribute('aria-expanded', 'false');
        }
      });

      main.addEventListener('click', () => {
        deskripsi.classList.remove('deskripsi_new');
        pos.setAttribute('aria-expanded', 'false');
      });

      /* set aria expanded state */
      pos.addEventListener('mouseover', () => {
        pos.setAttribute('aria-expanded', 'true');
      });

      pos.addEventListener('mouseleave', () => {
        pos.setAttribute('aria-expanded', 'false');
      });
    });
  },
};

export default restaurantPostInitiator;
