import CONFIG from '../../Globals/config';

const createHero = () => `
        <picture class="">
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg" type="image/jpeg" height="100%">
            <img 
                class="hero_picture lazyload"
                data-src="./images/heros/hero-image_4-large.jpg" 
                alt="food photo taken from above"
                width="100%"></img>
        </picture>
        <div class="hero_content">
            <h1 class="hero_title">Discover Tasty Meals</h1>
            <h1 class="hero_title">Around Your Town</h1>
            <p class="hero_tagline" aria-label="Nikmati cita rasa kuliner terbaik di depan anda.">Nikmati cita rasa kuliner terbaik di depan anda.</p>        
        </div>
  `;

const createHeroSkeleton = () => `
          <picture class="hero_picture">
              <source media="(max-width: 600px)" srcset="./images/placeholder.png" type="image/jpeg" height="100%">
              <img 
                  class="lazyload"
                  data-src="./images/placeholder.png" 
                  alt="food photo taken from above"
                  width="100%"></img>
          </picture>
          <div class="hero_content">
              <h1 class="hero_title skeleton" style="width:fit-content">Discover Tasty Meals</h1>
              <h1 class="hero_title skeleton" style="width:fit-content">Around Your Town</h1>
              <p class="hero_tagline skeleton" aria-label="Nikmati cita rasa kuliner terbaik di depan anda.">Nikmati cita rasa kuliner terbaik di depan anda.</p>        
          </div>
    `;

const createAbout = () => `
<h1 class="content_title">Tentang Lapar</h1>
<hr class="line_content_title">
<div class="aboutContainer">
  <div id="one" class="splide aboutSplide">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about1-small.jpg" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about1-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about2-small.jpg" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about2-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about3-small" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about3-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about4-small.jpg" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about4-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about5-small.jpg" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about5-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
        <li class="splide__slide">
            <picture class="aboutPicture">
              <source media="(max-width: 600px)" srcset="./images/heros/about6-small.jpg" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/heros/about6-large.jpg" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
        </li>
      </ul>
    </div>
  </div>
  <p class="deskripsi">
  Lapar group sudah berdiri selama lebih dari lima belas tahun di industri F&B, dan dikenal luas memiliki 20 merek restoran yang tersebar di seluruh Indonesia.
  </p>
</div>
    `;

const createAboutSkeleton = () => `
<h1 class="content_title skeleton" style="width:fit-content">Tentang Lapar</h1>
<hr class="line_content_title skeleton">
<div class="aboutContainer">
            <picture class="aboutPicture aboutSplide">
              <source media="(max-width: 600px)" srcset="./images/placeholder.png" type="image/jpeg" width="100%">
              <img 
                  class="lazyload"
                  data-src="./images/placeholder.png" 
                  alt="food photo taken from above"
                  width="100%"></img>
            </picture>
  <p class="deskripsi skeleton">
  Lapar group sudah berdiri selama lebih dari lima belas tahun di industri F&B, dan dikenal luas memiliki 20 merek restoran yang tersebar di seluruh Indonesia.
  </p>
</div>
    `;

const createDaftarRestauran = () => `
<h1 class="content_title">Daftar Restaurant</h1>
      <hr class="line_content_title">
      <p class="deskripsi">
      Restauran-restauran yang dimiliki oleh Lapar Group
      </p>
      <div id="restaurantPosts" class="restaurantPosts" aria-label="restaurantPosts"></div>
`;

const createDaftarRestauranSkeleton = () => `
      <h1 class="content_title skeleton" style="width:fit-content">Daftar Restaurant</h1>
      <hr class="line_content_title">
      <p class="deskripsi skeleton" style="width:fit-content">
      Restauran-restauran yang dimiliki oleh Lapar Group
      </p>
      <div id="restaurantPosts" class="restaurantPosts" aria-label="restaurantPosts"></div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<article tabindex="0" class="restaurantPost-item" aria-expanded="false" aria-label="restaurantPost-item">
  <h1 class="name">${restaurant.name} </h1>
  <div class="restaurantPost-item_header">
    <img class="restaurantPost-item_thumbnail lazyload" 
    data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="restaurantPost-item_header_rating">
            <p><i class="fa fa-star"></i><span class="rating"> ${restaurant.rating}</span></p>
    </div>
  </div>

  <div class="restaurantPost-item_content_button">
    <div class="restaurantPost-item_content">
      <p class="deskripsi" aria-label="deskripsi">${restaurant.description}</p>
      <p class="alamat" aria-label="kota"><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.city}</p>
    </div>
    <button class="add" onclick ="window.location.href='${`/#/detail/${restaurant.id}`}'"><p>Details</p></button>
</article>
  `;

const createRestaurantItemTemplateSkeleton = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <article tabindex="0" class="restaurantPost-item" aria-expanded="false" aria-label="restaurantPost-item">
    <h1 class="name skeleton" style="width:fit-content;color:#eeeeee;">lorem ipsum</h1>
    <div class="restaurantPost-item_header">
      <img class="restaurantPost-item_thumbnail lazyload" 
      data-src="./images/placeholder.png">
    </div>
  
    <div class="restaurantPost-item_content_button">
      <div class="restaurantPost-item_content">
        <p class="deskripsi skeleton" style="width:fit-content">lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem </p>
        <p class="alamat skeleton" style="width:fit-content"><i class="fa fa-map-marker" aria-hidden="true"></i> lorem ipsum </p>
      </div>
      <button class="add skeleton" style="border:none">Details</button>
  </article>
  `;
  }
  return template;
};

const createRestaurantAward = () => `
<h1 class="content_title">Penghargaan</h1>
<hr class="line_content_title">
<p class="deskripsi">
Lapar Group mendapat pengakuan publik melalui berbagai penghargaan bergengsi
</p>

<div class="restaurantAwardsContainer">
  <div id="two" class="splide">
  <div class="splide__track">
    <ul class="splide__list">
      <li class="splide__slide">
        <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name" aria-label="nama penghargaan">Kemenpar Restaurant Local Appreciation 2018</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/heros/1-small.jpg">
            <img 
              class="lazyload"
              data-src="./images/heros/1-large.jpg" 
              alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat" aria-label="nama restauran">Melting pot</p>
        </article>
      </li>
      <li class="splide__slide">
        <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name" aria-label="nama penghargaan">World Luxury Restaurant Awards 2017</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/heros/2-small.jpg">
            <img 
            class="lazyload"
            data-src="./images/heros/2-large.jpg" 
            alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat" aria-label="nama restauran">Makan Mudah</p>
        </article>
      </li>

      <li class="splide__slide">
        <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name" aria-label="nama penghargaan">Gin Mare Art of Hospitality Award 2021</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/heros/3-small.jpg">
            <img 
             class="lazyload"
             data-src="./images/heros/3-large.jpg" 
             alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat" aria-label="nama restauran">Tempat Siang Hari</p>
        </article>
      </li>

      <li class="splide__slide">
        <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name" aria-label="nama penghargaan">Flor de Caña Sustainable Restaurant Award 2021</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/heros/4-small.jpg">
            <img 
            class="lazyload"
            data-src="./images/heros/4-large.jpg" 
            alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat" aria-label="nama restauran">Hub Grubber</p>
        </article>
      </li>
    </ul>
  </div>
</div>
</div>
`;

const createRestaurantAwardSkeleton = () => `
<h1 class="content_title skeleton" style="width:fit-content">Penghargaan</h1>
<hr class="line_content_title">
<p class="deskripsi skeleton" style="width:fit-content">
Lapar Group mendapat pengakuan publik melalui berbagai penghargaan bergengsi
</p>

<div id="two" class="restaurantAwardsContainer">
      <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
        <h1 class="name skeleton" style="width:fit-content;color:#eeeeee;">Kemenpar Restaurant Local<br>Appreciation 2018</h1>
        <picture class="Testimony_thumbnail">
          <source media="(max-width: 600px)" srcset="./images/placeholder.png">
          <img 
              class="lazyload"
              data-src="./images/placeholder.png" 
              alt="Photo of Mirna Nasution"></img>
        </picture>
        <p class="alamat skeleton" style="width:fit-content">Melting pot</p>
      </article>
      <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name skeleton" style="width:fit-content;color:#eeeeee;">World Luxury Restaurant<br>Awards 2017</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/placeholder.png">
            <img 
            class="lazyload"
            data-src="./images/placeholder.png" 
            alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat skeleton" style="width:fit-content">Makan Mudah</p>
      </article>
      <article tabindex="0" class="restaurantPost-item" aria-label="restaurantAward-item">
          <h1 class="name skeleton" style="width:fit-content;color:#eeeeee;">Gin Mare Art of Hospitality<br>Award 2021</h1>
          <picture class="Testimony_thumbnail">
            <source media="(max-width: 600px)" srcset="./images/placeholder.png">
            <img 
             class="lazyload"
             data-src="./images/placeholder.png" 
             alt="Photo of Mirna Nasution"></img>
          </picture>
          <p class="alamat skeleton" style="width:fit-content">Tempat Siang Hari</p>
      </article>
</div>
`;

const createSkeletonRestaurantDetailTemplate = () => `
<div class="restaurantNameandButton mainNonHome">
    <div class="">
      <h2 id="content_titleDetail"class="content_title skeleton" style="width:fit-content">lorem ipsum</h2>
      <p class="deskripsiDetail skeleton" style="width:fit-content">Lorem ipsum, loros doret</p>
    </div>
    <div id="buttonContainer">
      <div id="likeButtonContainer">
        <button id="likeButton" class="like skeleton" style="border: none">
          lorem
        </button>
      </div>
      <div id="addReviewButtonContainer">
        <button id="addBtn" class="add skeleton" style="border: none">
           Lorem
        </button>
      </div>       
    </div>
  </div>  
  <hr class="line_content_title">
  <div id="detailContainer">
    <div class="pictureDetailandAdressContainer"> 
      <div class="restaurantPost-item_header">
        <img class="restaurantPoster" src="./images/placeholder.png"/>
      </div>
      <div id="deskripsiContainer">
        <p class="deskripsiDetail skeleton" style="width:fit-content">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
      </div>
      <p class="alamat skeleton" style="width:fit-content">lorem ipsum</p>
    </div>

    <div id="restaurantPost-item_contentDetail">
      <div class="menu">
        <h3 class="subHeadDetail skeleton" style="width:fit-content">Menu</h4>
        <hr class="line_content_title">
        <div class="restaurantMenu">
          <div class="makanan">
            <h3 class ="skeleton" style="width:fit-content">Makanan</h3>
            <div class="daftar__makanan skeleton" aria-label="menu makanan">
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
              <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>        
            </div>
          </div>
          <div class="minuman">
            <h3 class="skeleton" style="width:fit-content">Minuman</h3>
            <div class="daftar__minuman" aria-label="menu minuman">
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p>
            <p class="menuDetail skeleton" aria-label="deskripsi">lorem ipsum................................................................</p> 
            </div>
          </div>
        </div>
      </div>

      <div class="testimoni">
        <h2 class="subHeadDetail skeleton" style="width:fit-content">Testimoni</h4>
        <hr class="line_content_title">
        <div class="review" style="margin-top:16px">
          <p class="alamat skeleton" tabindex="0" aria-label="rating" style="width:fit-content">lorem ipsum</p>
          <div class="reviewandName">
              <p class="skeleton" tabindex="0" style="width:fit-content">“lorem ipsum lorem ipsum loremipsum”</p>
              <h3 class="skeleton" tabindex="0" style="width:fit-content">lorem ipsum</h6>
          </div>
        </div>
      </div>
  </div>
  
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurantNameandButton">
    <div class="">
      <h2 id="content_titleDetail"class="content_title">${restaurant.restaurant.name}</h2>
      <p class="kategori" aria-label="Kategori menu">${restaurant.restaurant.categories.map((categories) => categories.name).join(', ')}</p>
    </div>
    <div id="buttonContainer">
      <div id="likeButtonContainer"></div>
      <div id="addReviewButtonContainer"></div>       
    </div>
  </div>  
  <hr class="line_content_title">
  <div id="detailContainer">
    <div class="pictureDetailandAdressContainer"> 
      <div class="restaurantPost-item_header">
        <img class="restaurantPoster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
        <div class="restaurantPost-item_header_rating">
            <p><i class="fa fa-star"></i><span class="rating"> ${restaurant.restaurant.rating}</span></p>
        </div>
      </div>
      <div id="deskripsiContainer">
        <p class="deskripsiDetail" aria-label="deskripsi">${restaurant.restaurant.description}</p>
      </div>
      <p class="alamat" aria-label="alamat"><i class="fa fa-map-marker" aria-hidden="true"></i>
      ${restaurant.restaurant.city}, ${restaurant.restaurant.address}</p>
    </div>

    <div id="restaurantPost-item_contentDetail">
      <div class="menu">
        <h3 class="subHeadDetail">Menu</h4>
        <hr class="line_content_title">
        <div class="restaurantMenu">
          <div class="makanan">
            <h3>Makanan</h3>
            <div class="daftar__makanan" aria-label="menu makanan"></div>
          </div>
          <div class="minuman">
            <h3>Minuman</h3>
            <div class="daftar__minuman" aria-label="menu minuman"></div>
          </div>
        </div>
      </div>

      <div class="testimoni">
        <h2 class="subHeadDetail">Testimoni</h4>
        <hr class="line_content_title">
        <div id="three" class="splide">
          <div class="splide__track">
            <ul class="splide__list">
    
            </ul> 
          </div>
        </div>
      </div>
  </div>

`;

const createRestaurantDetailReview = (restaurant) => `
      <li class="splide__slide">
        <div class="review">
            <p class="alamat" tabindex="0" aria-label="rating">${restaurant.date}</p>
            <div class="reviewandName">
              <p tabindex="0">“${restaurant.review}”</p>
              <h3 tabindex="0">${restaurant.name}</h6>
            </div>
        </div>
      </li>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
     <p>Favorit</p>
  </button>
`;

const createUnlikeButtonRestaurantTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    <p>Favorit</p>
  </button>
`;

const createAddReviewButtonTemplate = () => `
  <button id="addBtn" class="add">
    <p class="plusIcon">+</p>
    <p>Testimoni</p>
  </button>
`;

const getEmptyRestaurantTemplate = () => `
    <h2 class="restaurantPost-item__not__found">Tidak ada restaurant yang disukai</h2>
  `;
// eslint-disable-next-line import/prefer-default-export
export {
  createHero,
  createHeroSkeleton,
  createAbout,
  createAboutSkeleton,
  createDaftarRestauran,
  createDaftarRestauranSkeleton,
  createRestaurantItemTemplate,
  createRestaurantItemTemplateSkeleton,
  createRestaurantAward,
  createRestaurantAwardSkeleton,
  createRestaurantDetailTemplate,
  createRestaurantDetailReview,
  createLikeRestaurantButtonTemplate,
  createUnlikeButtonRestaurantTemplate,
  createAddReviewButtonTemplate,
  createSkeletonRestaurantDetailTemplate,
  getEmptyRestaurantTemplate,
};

/*

*/
