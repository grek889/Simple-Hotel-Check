import { SET_HOTELS } from "../constants";

const defaultState = {
  hotels: [],
};

const hotels = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotels: action.payload };
    default:
      return state;
  }
};

export default hotels