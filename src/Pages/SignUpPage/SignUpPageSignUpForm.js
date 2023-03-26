import React from "react";
import { Form, Input } from "antd";
import { StyledDarkButton } from "../../Components/StyledComponents/StyledButton";
import { signUp } from "../../redux/actions/userAction/signUp";
import { useLogin } from "../../redux/actions/userAction/useLogin";
import StyledSpan from "../../Components/StyledComponents/StyledSpan";
import { NavLink } from "react-router-dom";

export default function SignUpPageSignUpForm() {
  const login = useLogin();

  const onFinish = (values) => {
    const { username, password, email, phone, accountName } = values;

    const loginData = {
      taiKhoan: accountName,
      matKhau: password,
    };

    const signUpData = {
      ...loginData,
      ...{ email, soDt: phone, maNhom: "GP01", hoTen: username },
    };

    signUp(signUpData, () => {
      login(loginData);
    });
  };
  return (
    <>
      <Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        requiredMark={false}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="Họ tên"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên!",
              whitespace: true,
            },
          ]}
        >
          <Input />
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
          <Input />
        </Form.Item>

        <Form.Item
          name="accountName"
          label="Tài khoản"
          rules={[
            {
              required: true,
              message: "Vui lòng tạo tên tài khoản mới!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Vui lòng tạo mật khẩu!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          tooltip={
            <div>
              <span>Số điện thoại có thể viết dưới dạng:</span>
              <p>0123456789 hoặc 012-345-6789</p>
              <p className="text-yellow-500">Số điện thoại có thể để trống</p>
            </div>
          }
          rules={[
            {
              pattern: "^([0-9-]*)$",
              message: "Vui lòng nhập dưới dạng chữ số!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <StyledDarkButton className="w-full mt-4" type="submit">
            Tạo tài khoản
          </StyledDarkButton>
        </Form.Item>
      </Form>

      <div className="flex justify-center mt-5">
        <p>Đã có tài khoản?</p>
        <NavLink to="/login">
          <StyledSpan>Đăng nhập</StyledSpan>
        </NavLink>
      </div>
    </>
  );
}
