/* eslint-disable no-underscore-dangle */

const AddReviewButtonInitiator = {
  initAdd({ addBtn, clsBtn, inputReview }) {
    addBtn.addEventListener('click', (event) => {
      this._clickToOpenInputReview(event, inputReview);
    });

    clsBtn.addEventListener('click', (event) => {
      this._clickToCloseReview(event, inputReview);
    });
  },

  _clickToOpenInputReview(event, inputReview) {
    inputReview.classList.add('reviewOpened');
    event.stopPropagation();
  },

  _clickToCloseReview(event, inputReview) {
    inputReview.classList.remove('reviewOpened');
    event.stopPropagation();
  },
};

export default AddReviewButtonInitiator;
