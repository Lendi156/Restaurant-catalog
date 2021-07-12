import LikeButtonInitiator from '../../src/scripts/Utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };
