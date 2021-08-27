import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/splide-core.min.css';
import App from './View/App';
import swRegister from './Utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// eslint-disable-next-line no-unused-vars
const app = new App({
  menu: document.querySelector('#menu'),
  nav: document.querySelector('.nav'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  item: document.querySelectorAll('#item'),
  restaurantPost: document.querySelectorAll('.post-item'),
  headerContainer: document.querySelector('.header_container'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
