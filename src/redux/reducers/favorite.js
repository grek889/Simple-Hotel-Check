import { ADD_FAVORITE, DELETE__FAVORITE } from "../constants";

const defaultState = {
  favoriteLists: [],
};

const favorite = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteLists: [...state.favoriteLists, action.payload],
      };
    case DELETE__FAVORITE:
      return {
        ...state,
        favoriteLists: state.favoriteLists.filter(
          (hotel) => hotel.hotelId !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default favorite;
