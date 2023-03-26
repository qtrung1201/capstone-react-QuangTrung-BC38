import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const deleteAccount = (account, onSuccess) => {
  userService
    .deleteAccount(account)
    .then(() => {
      openNotification({
        message: <p className="text-yellow-500">Xoá tài khoản thành công.</p>,
      });
      onSuccess();
    })

    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Xoá tài khoản không thành công.</p>
        ),
        description: error.response.data.content,
      });
    });
};
