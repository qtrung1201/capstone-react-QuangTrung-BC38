import { GET_THEATER_DATA } from "../constants/theaterActionTypes";

const initialState = {
  theaterData: null,
};

export const theaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEATER_DATA:
      state.theaterData = action.theaterData;
      return { ...state };

    default:
      return state;
  }
};
