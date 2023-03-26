import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const signUp = (signUpData, login) => {
  userService
    .postSignUp(signUpData)
    .then(() => {
      openNotification({
        message: <p className="text-green-700">Tạo tài khoản thành công.</p>,
        description: "Đang tự động đăng nhập.",
      });
      login();
    })

    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Tạo tài khoản không thành công.</p>
        ),
        description: error.response.data.content,
      });
    });
};
