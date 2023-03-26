import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const adminAddNewUser = (userInfo) => {
  userService
    .postAddUser(userInfo)
    .then(() => {
      openNotification({
        message: <p className="text-green-700">Tạo tài khoản thành công.</p>,
      });
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
