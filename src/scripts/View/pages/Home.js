import restaurantsApi from '../../Data/restaurant-api';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantTestimoni,
} from '../templates/template-creator';
import restaurantPostInitiator from '../../Utils/restaurantPost-initator';

const home = {
  async render() {
    return `
    <section class="content">
      <h1 class="content_title">Katalog</h1>
      <div id="restaurantPosts" class="restaurantPosts" aria-label="restaurantPosts">${createSkeletonRestaurantTemplate(20)}</div>
    </section>
    ${createRestaurantTestimoni()}
      `;
  },

  async afterRender() {
    const restaurants = await restaurantsApi.restaurantsList();
    const restaurantsContainer = document.querySelector('#restaurantPosts');
    const main = document.querySelector('main');
    restaurantsContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const restaurantPost = document.querySelectorAll('.restaurantPost-item');
    restaurantPostInitiator.initRestaurantPost({ restaurantPost, main });
  },
};

export default home;
