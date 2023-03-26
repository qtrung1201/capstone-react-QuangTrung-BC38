import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const getUserInfo = ({ account, onSuccess }) => {
  userService
    .postGetUserInfo(account)
    .then((success) => {
      onSuccess(success);
    })

    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Lấy thông tin người dùng thất bại!</p>
        ),
        description: error.response.data.content,
      });
    });
};
