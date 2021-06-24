import restaurantsApi from '../../Data/restaurant-api';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import postInitiator from '../../Utils/post-initator';

const home = {
  async render() {
    return `
    <section class="content">
    <h1 class="content_title">Katalog</h1>
    <div id="posts" class="posts">
        
    </div>
    </section>

    <section class="content">
    <h1 class="content_title">Testimoni</h1>
    <div class="posts">
        <article tabindex="0" class="post-item">
            <img class="Testimony_thumbnail" 
            src="images/heros/rendy-novantino-yZV9ftly838-unsplash.jpg" alt="">
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
            src="images/heros/luigi-estuye-lucreative-CEgyvJHKN98-unsplash.jpg" alt="">
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
            src="images/heros/szabo-viktor-Tm2Mz03S2j0-unsplash.jpg" alt="">
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
  },

  async afterRender() {
    const restaurants = await restaurantsApi.restaurantsList();
    const restaurantsContainer = document.querySelector('#posts');
    const main = document.querySelector('main');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    const post = document.querySelectorAll('.post-item');

    postInitiator.initPost({ post, main });
  },
};

export default home;
