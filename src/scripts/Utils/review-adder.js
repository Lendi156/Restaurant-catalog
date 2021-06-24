/* eslint-disable no-underscore-dangle */
import restaurantsApi from '../Data/restaurant-api';

const reviewAddedInitiator = {
  initAddReview({
    restaurant, name, reviewDesc, inputReview, submitReview,
  }) {
    this._reviewButton(restaurant, name, reviewDesc, inputReview, submitReview);
  },

  _reviewButton(restaurant, name, reviewDesc, inputReview, submitReview) {
    submitReview.addEventListener('click', () => {
      const newReview = {
        id: `${restaurant.restaurant.id}`,
        name: name.value,
        review: reviewDesc.value,
      };
      inputReview.classList.remove('reviewOpened');
      restaurantsApi.addreview(newReview);
    });
  },

};

export default reviewAddedInitiator;
