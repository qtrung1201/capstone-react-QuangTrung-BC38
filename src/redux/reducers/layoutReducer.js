import { SET_ACTIVE_PAGE, SET_LOADING } from "../constants/layoutActionTypes";

const initialState = {
  activePage: "/",
  isLoading: false,
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      state.activePage = action.path;
      return { ...state };

    case SET_LOADING:
      state.isLoading = action.isLoading;
      return { ...state };

    default:
      return state;
  }
};
