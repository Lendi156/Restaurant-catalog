import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';
import { createRestaurantItemTemplate, createRestaurantItemTemplateSkeleton, getEmptyRestaurantTemplate } from '../templates/template-creator';
import restaurantPostInitiator from '../../Utils/restaurantPost-initator';
import headerColorChanger from '../../Utils/header-color-changer';

const favorites = {
  async render() {
    return `
    <section class="content limiter">
      <h1 class="content_title">Daftar Restaurant Favoritemu</h1>
      <hr class="line_content_title">
      <p class="deskripsi">
      Restauran-restauran yang kamu sukai</p>
      <div id="restaurantPosts" class="restaurantPosts">
        ${createRestaurantItemTemplateSkeleton(3)}
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

    const hero = document.querySelector('.hero');
    const headerContainer = document.querySelector('.header_container');
    const menus = document.querySelectorAll('#item');
    const menuHover = document.querySelectorAll('.nav_item');
    const menuButton = document.querySelector('.header_menu');
    headerColorChanger.initHeaderColorChanger({
      headerContainer,
      hero,
      menus,
      menuButton,
      menuHover,
      main,
    });
  },
};

export default favorites;
