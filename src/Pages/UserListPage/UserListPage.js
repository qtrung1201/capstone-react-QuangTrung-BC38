import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserList } from "../../redux/actions/userAction/getUserList";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import { openNotification } from "../../utils/openNotification/openNotification";

export default function UserListPage() {
  const [userList, setUserList] = useState();
  const [isAdmin, setIsAdmin] = useState(true);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (userInfo && userInfo.maLoaiNguoiDung.toLowerCase() === "quantri") {
      setIsAdmin(true);
    } else {
      openNotification({
        message: (
          <p className="text-blue-500 m-0">
            Cần đăng nhập tài khoản quản trị truy cập mục quản lý.
          </p>
        ),
      });
      setIsAdmin(false);
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(setActivePage("/administration/user-list"));
    getUserList(setUserList);
  }, [dispatch]);

  const columns = [
    Table.EXPAND_COLUMN,
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (maLoaiNguoiDung) =>
        maLoaiNguoiDung === "KhachHang" ? (
          <Tag className="m-0" key={userList.taiKhoan}>
            Khách hàng
          </Tag>
        ) : (
          <Tag className="text-blue-500 m-0" key={userList.taiKhoan}>
            Quản trị
          </Tag>
        ),

      width: 200,
      align: "left",
    },
    {
      title: "Thao tác",
      key: "taiKhoan",
      dataIndex: "thaoTac",

      width: 220,
      fixed: "right",
      align: "center",
    },
  ];

  return (
    <>
      <div className="container mx-auto w-full h-screen p-10">
        {isAdmin ? (
          userList && (
            <Table
              className="module"
              dataSource={userList}
              rowKey={"taiKhoan"}
              columns={columns}
              expandable={{
                expandedRowRender: (user) => (
                  <>
                    <p>
                      <span className="inline-block mr-1 font-semibold">
                        Email:
                      </span>
                      <span>{user.email}</span>
                    </p>
                    <p>
                      <span className="inline-block mr-1 font-semibold">
                        Số điện thoại:
                      </span>
                      <span>
                        {user.soDT === ""
                          ? "chưa cập nhật số điện thoại"
                          : user.soDT}
                      </span>
                    </p>
                  </>
                ),
              }}
              scroll={{
                x: 1000,
                y: "calc(100vh - 190px)",
              }}
            />
          )
        ) : (
          <Navigate to="/login" />
        )}
      </div>
    </>
  );
}
