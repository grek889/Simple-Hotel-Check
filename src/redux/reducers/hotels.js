import { SET_HOTELS } from "../constants";

const defaultState = {
  hotelsList: [],
};

const hotels = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotelsList: action.payload };
    default:
      return state;
  }
};

export default hotels