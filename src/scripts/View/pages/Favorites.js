import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createSkeletonRestaurantTemplate } from '../templates/template-creator';

const favorites = {
  async render() {
    return `
    <section class="content">
    <h1 class="content_title">Favorites</h1>
    <div id="posts" class="posts">
    ${createSkeletonRestaurantTemplate(3)}
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default favorites;
