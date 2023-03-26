import React, { useState } from "react";
import _ from "lodash";
import { DatePicker, Form, Input, InputNumber, Radio, Switch, Upload } from "antd";
import {
  PlusOutlined,
  EditOutlined,
  ClearOutlined,
  HistoryOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { movieBlankFields } from "./blankFields";
import FormButton from "./FormButton";

const { TextArea } = Input;
const groupIDPrefix = "GP";

export default function AddMovieEditMovieForm({
  onSubmit,
  form,
  fields = movieBlankFields,
  movieID = "",
}) {
  const [newFields, setNewFields] = useState(fields);

  const isEdit = () => (form === "edit" ? true : false);

  const resetFields = () => {
    const newBlankFields = _.cloneDeep(movieBlankFields);
    setNewFields(newBlankFields);
  };
  const fillFields = () => {
    setNewFields(fields);
  };

  const noneUploadRequest = ({ onSuccess, file }) => {
    setTimeout(() => {
      onSuccess();
    }, 0);
  };

  const onFinish = (values) => {
    const {
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu,
      trangThaiCongChieu,
      hot,
      danhGia,
      hinhAnh,
      maNhom,
    } = values;

    const imageFile = () => (hinhAnh === null ? null : hinhAnh.file.originFileObj);

    const movie = {
      maPhim: movieID,
      tenPhim,
      trailer,
      moTa,
      ngayKhoiChieu: moment(ngayKhoiChieu).format("DD/MM/YYYY"),
      hot,
      danhGia: parseInt(danhGia),
      hinhAnh: imageFile(),
      maNhom: groupIDPrefix + maNhom,
      sapChieu:
        trangThaiCongChieu === "DangChieu" || trangThaiCongChieu === "NgungChieu"
          ? false
          : true,
      dangChieu:
        trangThaiCongChieu === "SapChieu" || trangThaiCongChieu === "NgungChieu"
          ? false
          : true,
    };

    const movieFormData = new FormData();
    for (let key in movie) {
      key !== hinhAnh
        ? movieFormData.append(key, movie[key])
        : movie.hinhAnh &&
          movieFormData.append("file", movie.hinhAnh, movie.hinhAnh.name);
    }

    onSubmit(movieFormData);
  };
  return (
    <>
      <Form
        layout="vertical"
        className="w-full"
        fields={newFields}
        requiredMark={false}
        onFinish={onFinish}
      >
        <Form.Item
          name="tenPhim"
          label="Tên phim:"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên phim!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="trailer"
          label="Trailer:"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập URL trailer phim!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="moTa"
          label="Mô tả:"
          rules={[
            {
              required: true,
              message: "Vui lòng điền mô tả phim!",
            },
          ]}
        >
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item
          name="trangThaiCongChieu"
          label="Trạng thái công chiếu:"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn trạng thái công chiếu!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="DangChieu">Đang chiếu</Radio>
            <Radio value="SapChieu">Sắp chiếu</Radio>
            <Radio value="NgungChieu">Ngừng chiếu</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="ngayKhoiChieu"
          label="Ngày khởi chiếu:"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn ngày khởi chiếu!",
            },
          ]}
        >
          <DatePicker format={"DD/MM/YYYY"} />
        </Form.Item>

        <div className="flex flex-wrap flex-col lg:flex-row justify-between gap-3">
          <Form.Item name="hot" label="Hot:" valuePropName="checked">
            <Switch className="module" />
          </Form.Item>

          <Form.Item
            name="danhGia"
            label="Điểm đánh giá:"
            tooltip="Điểm đánh giá từ 0-10. Chỉ bao gồm số nguyên."
            style={{ width: 160 }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập điểm!",
              },
            ]}
          >
            <InputNumber min={0} max={10} />
          </Form.Item>

          <Form.Item
            name="maNhom"
            label="Mã nhóm:"
            style={{ width: 170 }}
            rules={[
              { required: true, message: "Vui lòng nhập mã nhóm!" },
              {
                pattern: "^([0-9-]{2})$",
                message: "Vui lòng nhập hai chữ số.",
              },
            ]}
          >
            <Input style={{ width: 100 }} addonBefore={groupIDPrefix} disabled />
          </Form.Item>
        </div>

        <Form.Item
          name="hinhAnh"
          label="Hình ảnh:"
          valuePropName="file"
          rules={[
            {
              required: isEdit() ? false : true,
              message: "Vui lòng chọn file hình ảnh!",
            },
          ]}
        >
          <Upload listType="picture-card" maxCount={1} customRequest={noneUploadRequest}>
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
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

              <FormButton icon={<EditOutlined />} content={"Cập nhật"} type={"submit"} />
            </div>
          ) : (
            <div className="w-full flex justify-end flex-wrap">
              <FormButton
                icon={<DatabaseOutlined />}
                content={"Thêm phim"}
                type={"submit"}
              />
              <FormButton
                icon={<ClearOutlined />}
                content={"Loại bỏ thông tin"}
                handle={resetFields}
              />
            </div>
          )}
        </Form.Item>
      </Form>
    </>
  );
}
