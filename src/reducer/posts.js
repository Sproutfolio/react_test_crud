import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post,key) => (key=== action.payload._id ? action.payload.data : post));
    case DELETE:
      return posts.filter((post,key) => key !== action.payload);
    default:
      return posts;
  }
};

