import { Descriptions } from "antd";
import moment from "moment";
import React from "react";

export default function MovieInfoForm({ movieInfo }) {
  const {
    tenPhim,
    trailer,
    moTa,
    dangChieu,
    sapChieu,
    ngayKhoiChieu,
    danhGia,
    maNhom,
    hinhAnh,
  } = movieInfo;

  const trangThaiCongChieu = () => {
    if (dangChieu === true) {
      return "Đang chiếu";
    }
    if (sapChieu === true) {
      return "Sắp chiếu";
    }
    if (dangChieu === false && sapChieu === false) {
      return "Ngừng chiếu";
    }
  };

  return (
    <>
      <Descriptions
        title="Thông tin hiện tại"
        bordered
        column={1}
        labelStyle={{ width: 200 }}
        className="hidden sm:block"
      >
        <Descriptions.Item label="Tên phim">{tenPhim}</Descriptions.Item>
        <Descriptions.Item label="Trailer">{trailer}</Descriptions.Item>
        <Descriptions.Item label="Mô tả">{moTa}</Descriptions.Item>
        <Descriptions.Item label="Trạng thái công chiếu">
          {trangThaiCongChieu()}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày khởi chiếu">
          {moment(ngayKhoiChieu).format("DD/MM/YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="Đánh giá">{danhGia}</Descriptions.Item>
        <Descriptions.Item label="Mã nhóm">{maNhom}</Descriptions.Item>
        <Descriptions.Item label="Hình ảnh">
          <img src={hinhAnh} alt="..." />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
