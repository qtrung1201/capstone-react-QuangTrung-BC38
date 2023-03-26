import { Button, Form, Input } from "antd";
import React from "react";
import { fillUserFields } from "../../Components/UtilComponents/Form/filledFields";
import { userUpdateInfo } from "../../redux/actions/userAction/userUpdateInfo";

export default function UserDetailPageUpdateForm({ userInfo }) {
  const userData = fillUserFields(userInfo).filledFields;

  const { taiKhoan, matKhau, maNhom, maLoaiNguoiDung } = userInfo;
  const password = matKhau;

  const onFinish = (value) => {
    const { hoTen, email, soDT, matKhauMoi } = value;

    const userInfo = {
      taiKhoan,
      matKhau: matKhauMoi ? matKhauMoi : matKhau,
      email,
      soDT,
      maNhom,
      maLoaiNguoiDung,
      hoTen,
    };

    userUpdateInfo(userInfo);
  };

  return (
    <>
      <Form
        layout="horizontal"
        requiredMark={false}
        fields={userData}
        onFinish={onFinish}
        autoComplete="off"
        className="max-w-full"
      >
        <Form.Item
          name="hoTen"
          label="Họ tên"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên!",
              whitespace: true,
            },
          ]}
        >
          <Input bordered={false} />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "E-mail không hợp lệ!",
            },
            {
              required: true,
              message: "Vui lòng nhập e-mail!",
            },
          ]}
        >
          <Input bordered={false} />
        </Form.Item>

        <Form.Item
          name="soDT"
          label="Số điện thoại"
          rules={[
            {
              pattern: "^([0-9-]*)$",
              message: "Vui lòng nhập dưới dạng chữ số!",
            },
          ]}
        >
          <Input bordered={false} />
        </Form.Item>

        <Form.Item name="matKhauMoi" label="Thay đổi mật khẩu">
          <Input.Password bordered={false} />
        </Form.Item>

        <Form.Item
          name="passwordValidate"
          label="Xác thực người dùng"
          tooltip={
            <span>
              Bạn cần nhập
              <span className="text-yellow-500"> mật khẩu hiện tại</span> để xác
              thực người đang cập nhật là chủ tài khoản này.
            </span>
          }
          rules={[
            {
              pattern: password,
              message: "Mật khẩu không chính xác!",
            },
            {
              required: true,
              message: "Vui lòng nhập mật khẩu hiện tại!",
            },
          ]}
        >
          <Input.Password bordered={false} />
        </Form.Item>

        <Form.Item className="flex justify-center mb-0">
          <Button type="dash" shape="round" htmlType="submit">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
