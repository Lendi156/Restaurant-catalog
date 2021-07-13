import LikeButtonPresenter from '../../src/scripts/Utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/Data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
