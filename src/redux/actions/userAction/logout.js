import { userLocalStorage } from "../../../services/user/user.localStorage";
import { LOGOUT } from "../../constants/userActionTypes";

export const logout = () => {
  userLocalStorage.userInfo.remove();
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
