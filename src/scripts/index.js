import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './View/App';
import swRegister from './Utils/sw-register';

// eslint-disable-next-line no-unused-vars
const app = new App({
  menu: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  main: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  item: document.querySelectorAll('#item'),
  post: document.querySelectorAll('.post-item'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
