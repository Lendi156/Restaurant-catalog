import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate, getEmptyRestaurantTemplate } from '../templates/template-creator';
import restaurantPostInitiator from '../../Utils/restaurantPost-initator';

const favorites = {
  async render() {
    return `
    <section class="content">
    <h1 class="content_title">Favorites</h1>
    <div id="restaurantPosts" class="restaurantPosts">
    ${createSkeletonRestaurantTemplate(3)}
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurantPosts');
    const main = document.querySelector('main');
    restaurantsContainer.innerHTML = '';

    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      const restaurantPost = document.querySelectorAll('.restaurantPost-item');
      restaurantPostInitiator.initRestaurantPost({ restaurantPost, main });
    } else {
      restaurantsContainer.innerHTML = getEmptyRestaurantTemplate();
    }
  },
};

export default favorites;
