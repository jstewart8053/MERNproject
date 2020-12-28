//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
