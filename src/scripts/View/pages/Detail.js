import Splide from '@splidejs/splide';
import UrlParser from '../../Routes/url-parser';
import restaurantsApi from '../../Data/restaurant-api';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailReview,
  createAddReviewButtonTemplate,
  createSkeletonRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../Utils/like-button-presenter';
import AddReviewButtonInitiator from '../../Utils/review-inputPage-initiator';
import reviewAddedInitiator from '../../Utils/review-adder';
import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';
import headerColorChanger from '../../Utils/header-color-changer';

const detail = {
  async render() {
    return ` 
    <div id="myNav" class="overlay">
      <div id="formcontainer">
        <div class="inputContainer">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" class="input" placeholder="Type your name"><br>
          <label for="review">Review</label>
          <input type="text" id="review" name="review" class="input" placeholder="Type your review"><br><br>
          <input type="submit" value="Submit" id="submit" class"inputBtn">
          <button class="closeBtn testBtn">Batal</button>
        </div>
      </div>
    </div>

    <section class="content limiter" style="padding:0">
        <div id="restaurantDetail">
          ${createSkeletonRestaurantDetailTemplate()}
        </div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantsApi.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    const custReview = restaurant.restaurant.customerReviews;
    restaurantContainer.innerHTML = '';
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const daftarMakanan = document.querySelector('.daftar__makanan');
    const daftarMinuman = document.querySelector('.daftar__minuman');
    const daftarMakananLister = () => {
      restaurant.restaurant.menus.foods.forEach((tes) => {
        daftarMakanan.innerHTML += `
        <div class="lineWrapper">
          <p class="menuDetail" aria-label="deskripsi">${tes.name} </p>
          <p class="dot">................................................................................................................................</p>
        </div>
        `;
      });
    };

    const daftarMinumanLister = () => {
      restaurant.restaurant.menus.drinks.forEach((tes) => {
        daftarMinuman.innerHTML += `
        <div class="lineWrapper">
          <p class="menuDetail" aria-label="deskripsi">${tes.name}</p>
          <p class="dot">................................................................................................................................</p>
        </div>
        `;
      });
    };

    const testimoni = document.querySelector('.splide__list');
    const custRevFunc = () => {
      custReview.forEach((Review) => {
        testimoni.innerHTML += createRestaurantDetailReview(Review);
      });
    };

    custRevFunc();
    daftarMakananLister();
    daftarMinumanLister();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        restaurant: {
          id: restaurant.restaurant.id,
          name: restaurant.restaurant.name,
          description: restaurant.restaurant.description,
          city: restaurant.restaurant.city,
          addres: restaurant.restaurant.address,
          pictureId: restaurant.restaurant.pictureId,
          categories: restaurant.restaurant.categories,
          menus: restaurant.restaurant.menus,
          rating: restaurant.restaurant.rating,
          customerReviews: restaurant.restaurant.customerReviews,
        },
      },
    });

    /* setting input review page */
    const addReview = document.querySelector('#addReviewButtonContainer');
    addReview.innerHTML = createAddReviewButtonTemplate();

    const inputReview = document.querySelector('.overlay');
    const clsBtn = document.querySelector('.closeBtn');
    const addBtn = document.querySelector('#addBtn');
    AddReviewButtonInitiator.initAdd({ addBtn, clsBtn, inputReview });

    const splide = new Splide('#three', {
      type: 'loop',
      perPage: 1,
      autoplay: true,
      interval: 2000,
      pagination: false,
      autoHeight: true,
    }).mount();

    const submitReview = document.querySelector('#submit');
    const name = document.querySelector('#name');
    const reviewDesc = document.querySelector('#review');
    reviewAddedInitiator.initAddReview({
      restaurant,
      splide,
      name,
      reviewDesc,
      inputReview,
      submitReview,
    });

    const main = document.querySelector('main');
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

export default detail;
