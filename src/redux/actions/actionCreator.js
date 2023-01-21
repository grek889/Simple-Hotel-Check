import {
  ADD_DATA,
  GET_HOTELS,
  SET_HOTELS,
  ADD_FAVORITE,
  DELETE__FAVORITE,
} from "../constants";

export const addData = (obj) => ({
  type: ADD_DATA,
  payload: obj,
});

export const addFavorite = (obj) => ({
  type: ADD_FAVORITE,
  payload: obj,
});
export const deleteFavorite = (id) => ({
  type: DELETE__FAVORITE,
  payload: id,
});

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});
