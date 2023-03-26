import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../../services/user/user.localStorage";
import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";
import { LOGIN } from "../../constants/userActionTypes";

export const useLogin = () => {
  const history = useNavigate();
  const { activePage } = useSelector((state) => state.layoutReducer);
  const dispatch = useDispatch();

  const login = (loginData) => {
    userService
      .postLogin(loginData)
      .then((success) => {
        const userInfo = success.data.content;
        dispatch({ type: LOGIN, userInfo: userInfo });
        userLocalStorage.userInfo.set(userInfo);

        history(activePage);
      })
      .catch((error) => {
        openNotification({
          message: (
            <p className="text-red-500 m-0">Đăng nhập không thành công.</p>
          ),
          description: error.response.data.content,
        });
      });
  };

  return login;
};
