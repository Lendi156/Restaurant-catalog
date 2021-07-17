Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorites');
});

Scenario('liking one movie', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
});
