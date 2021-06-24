/* eslint-disable no-underscore-dangle */

const postInitiator = {
  initPost({ post, main }) {
    this._expandPost(post, main);
  },

  _expandPost(post, main) {
    post.forEach((pos) => {
      const deskripsi = pos.querySelector('.post-item_content > .deskripsi');
      pos.addEventListener('keyup', (event) => {
        if (event.keyCode === 9) {
          deskripsi.classList.add('deskripsi_new');
          pos.setAttribute('aria-expanded', 'true');
        }
      });

      pos.addEventListener('keydown', (event) => {
        if (event.keyCode === 9) {
          deskripsi.classList.remove('deskripsi_new');
          pos.setAttribute('aria-expanded', 'false');
        }
      });

      main.addEventListener('click', () => {
        deskripsi.classList.remove('deskripsi_new');
        pos.setAttribute('aria-expanded', 'false');
      });

      /* set aria expanded state */
      pos.addEventListener('mouseover', () => {
        pos.setAttribute('aria-expanded', 'true');
      });

      pos.addEventListener('mouseleave', () => {
        pos.setAttribute('aria-expanded', 'false');
      });
    });
  },
};

export default postInitiator;
