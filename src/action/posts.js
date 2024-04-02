import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getPosts = () => (dispatch) => {
  dispatch({ type: FETCH_ALL, payload: {} });
};

export const createPost = (post) => (dispatch) => {
  dispatch({ type: CREATE, payload: post });
};

export const updatePost = (id, post) => (dispatch) => {
  const data = {
    _id: id,
    data: post,
  };

  dispatch({ type: UPDATE, payload: data });
};

export const deletePost = (id) => (dispatch) => {
  dispatch({ type: DELETE, payload: id });
};
