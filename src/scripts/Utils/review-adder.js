/* eslint-disable no-underscore-dangle */
import restaurantsApi from '../Data/restaurant-api';
import { createRestaurantDetailReview } from '../View/templates/template-creator';

const reviewAddedInitiator = {
  initAddReview({
    restaurant, name, reviewDesc, inputReview, submitReview,
  }) {
    this._reviewButton(restaurant, name, reviewDesc, inputReview, submitReview);
  },

  _reviewButton(restaurant, name, reviewDesc, inputReview, submitReview) {
    submitReview.addEventListener('click', () => {
      if (navigator.onLine) {
        const newReview = {
          id: `${restaurant.restaurant.id}`,
          name: name.value,
          review: reviewDesc.value,
        };
        inputReview.classList.remove('reviewOpened');

        const addingReview = async () => {
          const restaurantNew = await restaurantsApi.addreview(newReview);
          const custReview = restaurantNew.customerReviews;
          const lastReview = custReview[custReview.length - 1];
          const restaurantReview = document.querySelector('#restaurantReview');
          const custRevFunc = () => {
            restaurantReview.innerHTML += createRestaurantDetailReview(lastReview);
          };
          custRevFunc();
        };

        addingReview();
      } else {
        // eslint-disable-next-line no-alert
        alert('Tidak bisa menambahkan reviewsaat offline');
        inputReview.classList.remove('reviewOpened');
      }
    });
  },

};

export default reviewAddedInitiator;
