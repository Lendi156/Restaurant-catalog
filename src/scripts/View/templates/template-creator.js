import CONFIG from '../../Globals/config';

const createSkeletonRestaurantDetailTemplate = () => `
  <h2 id="content_titleDetail"class="content_title skeleton">Lorem ipsum.</h2>
  <div id="detailContainer">
    <img class="restaurantPoster" src="./images/placeholder.png"/>
    <div id="post-item_contentDetail">
      <h4 class="subHeadDetail skeleton">Alamat</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit.</p>
      <h4 class="subHeadDetail skeleton">Kota</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit.</p>
      <h4 class="subHeadDetail skeleton">Kategori Menu</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit.</p>
      <h4 class="subHeadDetail skeleton">Menu Makanan</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est nisl. Praesent nec suscipit purus, a finibus est. Curabitur non tortor metus. Nunc porta massa id diam dictum egestas.</p>
      <h4 class="subHeadDetail skeleton">Menu Minuman</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est nisl. Praesent nec suscipit purus, a finibus est. Curabitur non tortor metus. Nunc porta massa id diam dictum egestas.</p>
      <h4 class="subHeadDetail skeleton">Rating</h4>
      <p class="deskripsiDetail skeleton">Lorem</p>
    </div>
  </div>

  <div id="deskripsiContainer">
      <h4 class="subHeadDetail skeleton">Deskripsi</h4>
      <p class="deskripsiDetail skeleton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt est nisl. Praesent nec suscipit purus, a finibus est. Curabitur non tortor metus. Nunc porta massa id diam dictum egestas. Suspendisse rhoncus venenatis quam quis tincidunt. Etiam sed nisl tristique, porta felis id, dictum dui. Ut pellentesque tristique erat ut mattis. Pellentesque pretium vestibulum massa sit amet laoreet. In sed tincidunt libero. Fusce lobortis, purus at vestibulum molestie, elit erat volutpat ex, ut posuere magna ex eu magna. Donec sed enim sed dui congue dapibus a vitae lorem. Cras finibus est nibh, sed hendrerit ex sagittis in. Vestibulum elit diam, dictum sit amet justo commodo, convallis luctus turpis. </p>
  </div>
`;

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

const createTestimoni = () => `
<h2 id="content_titleDetail"class="content_title">Testimoni</h2>
`;

const createSkeletonTestimoni = () => `
<h2 id="content_titleDetail"class="content_title skeleton">Testimoni</h2>
`;

const createSkeletonRestaurantDetailReview = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
        <div class="review">
            <h6 class="subHeadDetail skeleton" tabindex="0">Lorem ipsum</h6>
            <p class="rating skeleton" tabindex="0">Lorem.</p>
            <p class="deskripsiDetail skeleton" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
  `;
  }
  return template;
};

const createRestaurantDetailReview = (restaurant) => `
        <div class="review">
            <h6 class="subHeadDetail" tabindex="0">${restaurant.name}</h6>
            <p class="rating" tabindex="0">${restaurant.date}</p>
            <p class="deskripsiDetail" tabindex="0">${restaurant.review}</p>
        </div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <article tabindex="0" class="post-item" aria-expanded="false">
        <img class="post-item_thumbnail" width="100%" height="350px" src="./images/placeholder.png">
        <div class="post-item_content">
          <h1 class="name skeleton">Lorem ipsum dolor sit. </h1>
          <p class="rating skeleton">Lorem ipsum dolor sit. </p>
          <p class="alamat skeleton">Lorem ipsum dolor sit. </p>
          <p class="deskripsi skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
        <button class="details skeleton">Details</button>
      </article>
  `;
  }
  return template;
};

const createRestaurantTestimoni = () => `
<section class="content">
<h1 class="content_title">Testimoni</h1>
<div class="posts">
    <article tabindex="0" class="post-item">
        <img class="Testimony_thumbnail" 
        src="images/heros/1.jpg" alt="">
        <div class="Testimony_content">
            <h1 class="name">Mirna Nasution </h1>
            <p class="rating">Model</p>
            <p class="deskripsi">
                <q>Saya sering mampir ke restoran-restoran milik lapar.id dan sangat puas dengan pelayannanya</q> 
            </p>
        </div>
    </article>

    <article tabindex="0" class="post-item">
        <img class="Testimony_thumbnail" 
        src="images/heros/2.jpg" alt="">
        <div class="Testimony_content">
            <h1 class="name">Adam Sutisna</h1>
            <p class="rating">Pengusaha</p>
            <p class="deskripsi">
                <q>Sangat saya rekomendasikan untuk menjamu partner-partner bisnis.</q> 
            </p>
        </div>
    </article>

    <article tabindex="0" class="post-item" >
        <img class="Testimony_thumbnail" 
        src="images/heros/3.jpg" alt="">
        <div class="Testimony_content">
            <h1 class="name">Chris Schelberg</h1>
            <p class="rating">Traveler dan Food Blogger</p>
            <p class="deskripsi">
                <q>Merupakan restoran pertama yang saya kunjungi ketika pertama kali di Indonesia. Tidak menyesal karena makanan yang disajikan benar-benar lezat.</q> 
            </p>
        </div>
    </article>
</div>
</section>
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

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonRestaurantTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
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
  createLikeRestaurantButtonTemplate,
  createUnlikeButtonRestaurantTemplate,
  createAddReviewButtonTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantTestimoni,
  createSkeletonRestaurantDetailTemplate,
  createSkeletonRestaurantDetailReview,
  createTestimoni,
  createSkeletonTestimoni,
};

/*

*/
