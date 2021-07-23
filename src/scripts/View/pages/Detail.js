import UrlParser from '../../Routes/url-parser';
import restaurantsApi from '../../Data/restaurant-api';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailReview,
  createAddReviewButtonTemplate,
  createSkeletonRestaurantDetailTemplate,
  createSkeletonRestaurantDetailReview,
  createTestimoni,
  createSkeletonTestimoni,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../Utils/like-button-presenter';
import AddReviewButtonInitiator from '../../Utils/review-inputPage-initiator';
import reviewAddedInitiator from '../../Utils/review-adder';
import FavoriteRestaurantIdb from '../../Data/favoriterestaurant-idb';

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
          <input type="submit" value="SUBMIT" id="submit" class"inputBtn">
          <button class="closebtn inputBtn">BATAL</button>
        </div>
      </div>
    </div>

    <section class="contentDetail">
        <div id="restaurantDetail">
        ${createSkeletonRestaurantDetailTemplate()}
        </div>
        <div id="testimoni">
        ${createSkeletonTestimoni()}
        </div>
        <div id="restaurantReview">
        ${createSkeletonRestaurantDetailReview(3)}
        </div>
        <div id="buttonContainer">
         <div id="addReviewButtonContainer"></div>
         <div id="likeButtonContainer"></div>
        </div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await restaurantsApi.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurantDetail');
    const custReview = restaurant.restaurant.customerReviews;
    const restaurantReview = document.querySelector('#restaurantReview');
    const testimoni = document.querySelector('#testimoni');
    const custRevFunc = () => {
      custReview.forEach((Review) => {
        restaurantReview.innerHTML += createRestaurantDetailReview(Review);
      });
    };

    restaurantContainer.innerHTML = '';
    restaurantReview.innerHTML = '';
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    testimoni.innerHTML = createTestimoni();
    custRevFunc();

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
    const clsBtn = document.querySelector('.closebtn');
    const addBtn = document.querySelector('#addBtn');
    AddReviewButtonInitiator.initAdd({ addBtn, clsBtn, inputReview });

    const submitReview = document.querySelector('#submit');
    const name = document.querySelector('#name');
    const reviewDesc = document.querySelector('#review');
    reviewAddedInitiator.initAddReview({
      restaurant,
      name,
      reviewDesc,
      inputReview,
      submitReview,
    });
  },
};

export default detail;
