import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favorites = {
  async render() {
    return `
    <section class="content">
    <h1 class="content_title">Favorites</h1>
    <div id="posts" class="posts">
        
    </div>
    </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    restaurants.forEach((movie) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default favorites;
