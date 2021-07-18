const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorites');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Favorites', '.content_title');
});

Scenario('liking one movie', async({ I }) => {
  I.see('Favorites', '.content_title');
  pause();
  I.amOnPage('/');

  I.seeElement('.details');
  const firstRestaurant = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(locate('.details').first());
  I.click(locate('.details').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.seeElement('.post-item');

  const likedRestarantTitle = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantTitle, likedRestarantTitle);
});

Scenario('unliking one movie', async({ I }) => {
  I.see('Favorites', '.content_title');

  I.amOnPage('/');

  I.seeElement('.details');
  const firstRestaurant = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(locate('.details').first());
  I.click(locate('.details').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.seeElement('.post-item');

  const likedRestarantTitle = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantTitle, likedRestarantTitle);

  I.click(locate('.details').first());
  I.click(locate('.details').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.seeElement('.post-item__not__found');
});
