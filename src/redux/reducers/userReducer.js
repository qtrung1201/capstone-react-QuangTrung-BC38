import { userLocalStorage } from "../../services/user/user.localStorage";
import { LOGIN, LOGOUT } from "../constants/userActionTypes";

const initialState = {
  userInfo: userLocalStorage.userInfo.get(),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state.userInfo = action.userInfo;
      return { ...state };

    case LOGOUT:
      state.userInfo = null;
      return { ...state };

    default:
      return state;
  }
};
