import API_ENDPOINT from '../Globals/api-endpoints';

class restaurantsApi {
  static async restaurantsList() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addreview(newReview) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(newReview),
    });
    await fetch(API_ENDPOINT.DETAIL(newReview.id));
    await fetch(API_ENDPOINT.DETAIL(newReview.id));
    return response.json();
  }
}

export default restaurantsApi;
