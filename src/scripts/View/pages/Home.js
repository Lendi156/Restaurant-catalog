import Splide from '@splidejs/splide';
import restaurantsApi from '../../Data/restaurant-api';
import {
  createHero,
  createHeroSkeleton,
  createAbout,
  createAboutSkeleton,
  createDaftarRestauran,
  createDaftarRestauranSkeleton,
  createRestaurantItemTemplate,
  createRestaurantItemTemplateSkeleton,
  createRestaurantAwardSkeleton,
  createRestaurantAward,
} from '../templates/template-creator';
import restaurantPostInitiator from '../../Utils/restaurantPost-initator';
import headerColorChanger from '../../Utils/header-color-changer';

const home = {
  async render() {
    return `
    <div class="hero">
      ${createHeroSkeleton()}  
    </div>

    <section class="content limiter" id="about">
      ${createAboutSkeleton()}
    </section>

    <section class="content limiter" id="daftar">
      ${createDaftarRestauranSkeleton()}
    </section>

    <section class="content limiter" id="penghargaan">
      ${createRestaurantAwardSkeleton()}
    </section>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurantPosts');
    restaurantsContainer.innerHTML = createRestaurantItemTemplateSkeleton(20);

    const hero = document.querySelector('.hero');
    const about = document.querySelector('#about');
    const daftar = document.querySelector('#daftar');
    const penghargaan = document.querySelector('#penghargaan');
    hero.innerHTML = `${createHero()}`;
    about.innerHTML = `${createAbout()}`;
    penghargaan.innerHTML = `${createRestaurantAward()}`;

    const restaurants = await restaurantsApi.restaurantsList();
    const main = document.querySelector('main');
    daftar.innerHTML = `${createDaftarRestauran()}`;
    const restaurantsContainerNew = document.querySelector('#restaurantPosts');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainerNew.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const restaurantPost = document.querySelectorAll('.restaurantPost-item');
    restaurantPostInitiator.initRestaurantPost({ restaurantPost, main });

    const menus = document.querySelectorAll('#item');
    const headerContainer = document.querySelector('.header_container');
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

    function sliderOne() {
      const one = new Splide('#one', {
        type: 'fade',
        rewind: true,
        rewindSpeed: 2000,
        perPage: 1,
        perMove: 1,
        autoplay: true,
        arrows: false,
        interval: 2000,
        autoHeight: false,
        autoWidth: true,
      }).mount();
      return one;
    }

    function sliderTwo() {
      const two = new Splide('#two', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        pagination: false,
        gap: '36px',
        breakpoints: {
          769: {
            perPage: 2,
          },
          634: {
            perPage: 1,
          },
        },
      }).mount();
      return two;
    }

    sliderOne();
    sliderTwo();
  },
};

export default home;
