import restaurantsApi from '../../Data/restaurant-api';
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantTestimoni,
} from '../templates/template-creator';
import postInitiator from '../../Utils/post-initator';

const home = {
  async render() {
    return `
    <section class="content">
      <h1 class="content_title">Katalog</h1>
      <div id="posts" class="posts">${createSkeletonRestaurantTemplate(20)}</div>
    </section>
    ${createRestaurantTestimoni()}
      `;
  },

  async afterRender() {
    const restaurants = await restaurantsApi.restaurantsList();
    const restaurantsContainer = document.querySelector('#posts');
    const main = document.querySelector('main');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const post = document.querySelectorAll('.post-item');
    postInitiator.initPost({ post, main });
  },
};

export default home;
