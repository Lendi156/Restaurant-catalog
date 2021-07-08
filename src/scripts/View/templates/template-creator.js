import CONFIG from '../../Globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 id="content_titleDetail"class="content_title">${restaurant.restaurant.name}</h2>
  <div id="detailContainer">
    <img class="restaurantPoster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
    <div id="post-item_contentDetail">
      <h4 class="subHeadDetail">Alamat</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.address}</p>
      <h4 class="subHeadDetail">Kota</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.city}</p>
      <h4 class="subHeadDetail">Kategori Menu</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.categories.map((categories) => categories.name).join(', ')}</p>
      <h4 class="subHeadDetail">Menu Makanan</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.menus.foods.map((foods) => foods.name).join(', ')}</p>
      <h4 class="subHeadDetail">Menu Minuman</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.menus.drinks.map((drinks) => drinks.name).join(', ')}</p>
      <h4 class="subHeadDetail">Rating</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.rating}</p>
    </div>
  </div>

  <div id="deskripsiContainer">
      <h4 class="subHeadDetail">Deskripsi</h4>
      <p class="deskripsiDetail">${restaurant.restaurant.description}</p>
  </div>
`;

const createRestaurantDetailReview = (restaurant) => `
        <div class="review">
            <h6 class="subHeadDetail" tabindex="0">${restaurant.name}</h6>
            <p class="rating" tabindex="0">${restaurant.date}</p>
            <p class="deskripsiDetail" tabindex="0">${restaurant.review}</p>
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="post-item" aria-expanded="false">
<img class="post-item_thumbnail" 
src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
<div class="post-item_content">
    <h1 class="name">${restaurant.name} </h1>
    <p class="rating">Rating : ${restaurant.rating}</p>
    <p class="alamat">Kota : ${restaurant.city}</p>
    <p class="deskripsi">${restaurant.description}</p>
</div>
<button class="details" onclick ="window.location.href='${`/#/detail/${restaurant.id}`}'">Details</button>
</article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createAddReviewButtonTemplate = () => `
  <button id="addBtn" class="add">
     TAMBAH TESTIMONI
  </button>
`;
// eslint-disable-next-line import/prefer-default-export
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailReview,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createAddReviewButtonTemplate,
};

/*

*/
