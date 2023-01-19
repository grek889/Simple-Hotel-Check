import { ADD_DATA, GET_HOTELS, SET_HOTELS } from "../constants";

export const addData = (obj) => ({
  type: ADD_DATA,
  payload: obj,
});

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});
