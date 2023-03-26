import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const userUpdateInfo = (updateData) => {
  userService
    .putUserUpdateInfo(updateData)
    .then(() => {
      openNotification({
        message: <p className="text-green-700 m-0">Cập nhật thành công.</p>,
      });
    })

    .catch((error) => {
      openNotification({
        message: <p className="text-red-500 m-0">Cập nhật không thành công!</p>,
        description: error.response.data.content,
      });
    });
};
