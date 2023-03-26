import _ from "lodash";
import { Form, Input, Radio } from "antd";
import {
  EditOutlined,
  ClearOutlined,
  HistoryOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import FormButton from "./FormButton";
import { userBlankFields } from "./blankFields";

const groupIDPrefix = "GP";

export default function AddUserEditUserForm({
  form,
  onChange = () => {},
  onSubmit,
  defaultFields,
  filledFields = userBlankFields,
  userPassword,
}) {
  const [fields, setFields] = useState(filledFields);
  const [isDisable, setIsDisable] = useState(true);

  const isEdit = () => (form === "edit" ? true : false);

  const confirmPassword = (event) => {
    event.target.value === userPassword &&
      isDisable === true &&
      setIsDisable(false);

    event.target.value !== userPassword &&
      isDisable === false &&
      setIsDisable(true);
  };

  const clearFields = () => {
    const newBlankFields = _.cloneDeep(userBlankFields);
    setFields(newBlankFields);
  };
  const resetFields = () => {
    setFields(defaultFields);
  };
  const fillFields = () => {
    setFields(filledFields);
  };

  const onFinish = (values) => {
    const { taiKhoan, matKhau, maLoaiNguoiDung, maNhom, hoTen, email, soDT } =
      values;

    const updateData = {
      taiKhoan,
      matKhau,
      maLoaiNguoiDung,
      hoTen,
      email,
      soDT,
      maNhom: groupIDPrefix + maNhom,
    };

    onSubmit(updateData);
  };

  return (
    <>
      <Form
        name="global_state"
        layout="vertical"
        fields={fields}
        requiredMark={false}
        onFinish={onFinish}
        onFieldsChange={(_, allFields) => {
          onChange(allFields);
        }}
      >
        <Form.Item
          name="taiKhoan"
          label="Tài khoản"
          rules={[
            {
              required: true,
              message: "Vui lòng tạo tên tài khoản mới!",
              whitespace: true,
            },
          ]}
        >
          <Input disabled={isEdit()} />
        </Form.Item>

        <Form.Item
          name="matKhau"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Mật khẩu không được để trống!",
            },
          ]}
        >
          <Input.Password disabled={isDisable && isEdit()} />
        </Form.Item>

        {isEdit() && (
          <Form.Item
            name="xacThuc"
            label="Xác thực mật khẩu"
            tooltip="Cần xác thực mật khẩu hiện tại của người dùng trước khi thay đổi và cập nhật mật khẩu mới."
            rules={[
              {
                pattern: userPassword,
                message: "Mật khẩu không chính xác!",
              },
            ]}
          >
            <Input.Password
              onChange={(event) => {
                confirmPassword(event);
              }}
            />
          </Form.Item>
        )}

        <Form.Item
          name="maLoaiNguoiDung"
          label="Loại người dùng"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn loại người dùng!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="KhachHang">Khách hàng</Radio>
            <Radio value="QuanTri">Quản trị</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="maNhom"
          label="Mã nhóm"
          rules={[
            { required: true, message: "Vui lòng nhập mã nhóm!" },
            {
              pattern: "^([0-9-]{2})$",
              message:
                "Vui lòng nhập hai chữ số. Nếu muốn thêm người dùng vào nhóm 1, vui lòng nhập 01.",
            },
          ]}
        >
          <Input disabled addonBefore={groupIDPrefix} />
        </Form.Item>

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
          name="soDT"
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
          {isEdit() ? (
            <div className="flex justify-center flex-wrap">
              <FormButton
                icon={<HistoryOutlined />}
                content={"Hoàn tác thông tin gốc"}
                handle={fillFields}
              />

              <FormButton
                icon={<ClearOutlined />}
                content={"Loại bỏ thông tin"}
                handle={resetFields}
              />

              <FormButton
                icon={<EditOutlined />}
                content={"Cập nhật"}
                type={"submit"}
              />
            </div>
          ) : (
            <div className="w-full flex justify-end flex-wrap">
              <FormButton
                icon={<UserAddOutlined />}
                content={"Thêm người dùng"}
                type={"submit"}
              />
              <FormButton
                icon={<ClearOutlined />}
                content={"Loại bỏ thông tin"}
                handle={clearFields}
              />
            </div>
          )}
        </Form.Item>
      </Form>
    </>
  );
}
