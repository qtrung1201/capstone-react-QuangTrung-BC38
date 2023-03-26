import UserListPageUserAction from "../../../Pages/UserListPage/UserListPageUserAction";
import { userService } from "../../../services/user/user.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const getUserList = (setState) => {
  userService
    .getUserList()
    .then((success) => {
      const userList = success.data.content;

      const newUserList = userList.map((item) => {
        return {
          ...item,
          thaoTac: (
            <UserListPageUserAction
              account={item.taiKhoan}
              onSuccess={() => {
                getUserList(setState);
              }}
            />
          ),
        };
      });

      setState(newUserList);
    })

    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Lấy danh sách người dùng thất bại!</p>
        ),
        description: error.response.data.content,
      });
    });
};
