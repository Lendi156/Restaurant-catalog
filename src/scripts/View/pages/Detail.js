import UrlParser from '../../Routes/url-parser';
import restaurantsApi from '../../Data/restaurant-api';
import { createRestaurantDetailTemplate, createRestaurantDetailReview, createAddReviewButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../Utils/like-button-presenter';
import AddReviewButtonInitiator from '../../Utils/review-inputPage-initiator';
import reviewAddedInitiator from '../../Utils/review-adder';

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
        <div id="postDetail">
        
        </div>
        <h2 id="content_titleDetail"class="content_title">Testimoni</h2>
        <div id="restaurantReview">
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
    const restaurantContainer = document.querySelector('#postDetail');
    const custReview = restaurant.restaurant.customerReviews;
    const custRevFunc = () => {
      const restaurantReview = document.querySelector('#restaurantReview');
      custReview.forEach((Review) => {
        restaurantReview.innerHTML += createRestaurantDetailReview(Review);
      });
    };

    custRevFunc();

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          addres: restaurant.address,
          pictureId: restaurant.pictureId,
          categories: restaurant.categories,
          menus: restaurant.menus,
          rating: restaurant.rating,
          customerReviews: restaurant.customerReviews,
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
