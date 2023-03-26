import { GET_MOVIE_LIST } from "../constants/movieActionTypes";

const initialState = {
  movieList: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      state.movieList = action.movieList;
      return { ...state };

    default:
      return state;
  }
};
