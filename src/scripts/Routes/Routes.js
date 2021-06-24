import home from '../View/pages/Home';
import detail from '../View/pages/Detail';
import favorites from '../View/pages/Favorites';

const routes = {
  '/': home, // default page
  '/home': home,
  '/favorites': favorites,
  '/detail/:id': detail,
  '/Favorites': favorites,
};

export default routes;
