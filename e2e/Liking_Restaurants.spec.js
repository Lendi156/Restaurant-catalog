const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorites');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Favorites', '.content_title');
});

Scenario('liking one restaurant', async({ I }) => {
  I.see('Favorites', '.content_title');
  I.amOnPage('/');
  I.wait(4);

  I.seeElement('.details');
  const firstRestaurant = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(locate('.details').first());
  I.click(locate('.details').first());

  I.wait(4);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.wait(4);
  I.seeElement('.restaurantPost-item');
 
  const likedRestarantTitle = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantTitle, likedRestarantTitle);
});

Scenario('unliking restaurant', async({ I }) => {
  I.see('Favorites', '.content_title');

  I.amOnPage('/');
  I.wait(4);

  I.seeElement('.details');
  const firstRestaurant = locate('.name').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(locate('.details').first());
  I.click(locate('.details').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.wait(4);
  I.seeElement('.restaurantPost-item');

  const likedRestarantTitle = await I.grabTextFrom('.name');
  assert.strictEqual(firstRestaurantTitle, likedRestarantTitle);

  I.click(locate('.details').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/Favorites');
  I.wait(4);
  I.seeElement('.restaurantPost-item__not__found');
});
