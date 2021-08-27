/* eslint-disable no-underscore-dangle */
import restaurantsApi from '../Data/restaurant-api';

const reviewAddedInitiator = {
  initAddReview({
    restaurant, splide, name, reviewDesc, inputReview, submitReview,
  }) {
    this._reviewButton(restaurant, splide, name, reviewDesc, inputReview, submitReview);
  },

  _reviewButton(restaurant, splide, name, reviewDesc, inputReview, submitReview) {
    submitReview.addEventListener('click', () => {
      if (navigator.onLine) {
        const newReview = {
          id: `${restaurant.restaurant.id}`,
          name: name.value,
          review: reviewDesc.value,
        };

        const addingReview = async () => {
          const restaurantNew = await restaurantsApi.addreview(newReview);
          const custReview = restaurantNew.customerReviews;
          const lastReview = custReview[custReview.length - 1];
          const contReview = splide;
          await contReview.add(`<li class="splide__slide">
          <div class="review">
              <p class="alamat" tabindex="0" aria-label="rating">${lastReview.date}</p>
              <div class="reviewandName">
                <p tabindex="0">“${lastReview.review}”</p>
                <h3 tabindex="0">${lastReview.name}</h6>
              </div>
          </div>
        </li>`);

          // const custRevFunc = () => {
          //   contReview.add(`${createRestaurantDetailReview(lastReview)}`);
          // };
          // custRevFunc();
        };

        addingReview();
        inputReview.classList.remove('reviewOpened');
      } else {
        // eslint-disable-next-line no-alert
        alert('Tidak bisa menambahkan review saat offline');
        inputReview.classList.remove('reviewOpened');
      }
    });
  },

};

export default reviewAddedInitiator;
