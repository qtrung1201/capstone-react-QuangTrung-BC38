import React from "react";
import { Descriptions } from "antd";

export default function UserInfoForm({ userInfo }) {
  const { taiKhoan, maLoaiNguoiDung, maNhom, hoTen, email, soDT } = userInfo;

  return (
    <>
      <Descriptions title="Thông tin hiện tại" bordered column={1}>
        <Descriptions.Item label="Tài khoản">{taiKhoan}</Descriptions.Item>
        <Descriptions.Item label="Loại người dùng">
          {maLoaiNguoiDung === "QuanTri" ? "Quản trị" : "Khách hàng"}
        </Descriptions.Item>
        <Descriptions.Item label="Mã nhóm">{maNhom}</Descriptions.Item>
        <Descriptions.Item label="Họ tên">{hoTen}</Descriptions.Item>
        <Descriptions.Item label="Email">{email} </Descriptions.Item>
        <Descriptions.Item label="Số điện thoại">{soDT} </Descriptions.Item>
      </Descriptions>
    </>
  );
}
