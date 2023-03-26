import { Form, Input } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLogin } from "../../../redux/actions/userAction/useLogin";

const Button = styled.button`
  padding: 0.25rem 0.75rem;
  color: ${(props) => props.theme.text.color01};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.text.color01};
    color: ${(props) => props.theme.background.color01};
  }
`;

export default function LoginForm({ defaultFooter = true, editFooter }) {
  const login = useLogin();

  const onFinish = (values) => {
    const loginData = {
      taiKhoan: values.username,
      matKhau: values.password,
    };

    login(loginData);
  };
  return (
    <>
      <Form
        name="header-form"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        {defaultFooter ? (
          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <div className="flex flex-row-reverse justify-start items-center mt-2">
              <Button type="submit">Đăng nhập</Button>

              <NavLink to="/sign-up">
                <Button> Đăng ký</Button>
              </NavLink>
            </div>
          </Form.Item>
        ) : (
          editFooter
        )}
      </Form>
    </>
  );
}
