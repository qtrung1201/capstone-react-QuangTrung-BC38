import moment from "moment";

export const fillUserFields = (userInfo) => {
  const { taiKhoan, matKhau, maLoaiNguoiDung, maNhom, hoTen, email, soDT } =
    userInfo;

  const fields = [
    { name: ["taiKhoan"], value: taiKhoan },
    { name: ["matKhau"], value: matKhau },
    { name: ["maNhom"], value: maNhom.slice(2, 4) },
  ];

  const defaultFields = [
    ...fields,
    { name: ["maLoaiNguoiDung"], value: "KhachHang" },
    { name: ["hoTen"], value: "" },
    { name: ["email"], value: "" },
    { name: ["soDT"], value: "" },
  ];

  const filledFields = [
    ...fields,
    { name: ["maLoaiNguoiDung"], value: maLoaiNguoiDung },
    { name: ["hoTen"], value: hoTen },
    { name: ["email"], value: email },
    { name: ["soDT"], value: soDT },
  ];

  return { defaultFields, filledFields };
};

export const fillMovieFields = (movieInfo) => {
  const {
    tenPhim,
    trailer,
    moTa,
    dangChieu,
    sapChieu,
    ngayKhoiChieu,
    hot,
    danhGia,
    maNhom,
  } = movieInfo;

  const trangThaiCongChieu = () => {
    if (dangChieu === true) {
      return "DangChieu";
    }
    if (sapChieu === true) {
      return "SapChieu";
    }
    if (dangChieu === false && sapChieu === false) {
      return "NgungChieu";
    }
  };

  const filledFields = [
    { name: ["tenPhim"], value: tenPhim },
    { name: ["trailer"], value: trailer },
    { name: ["moTa"], value: moTa },
    { name: ["trangThaiCongChieu"], value: trangThaiCongChieu() },
    { name: ["ngayKhoiChieu"], value: moment(ngayKhoiChieu) },
    { name: ["hot"], value: hot },
    { name: ["danhGia"], value: danhGia },
    { name: ["hinhAnh"], value: null },
    { name: ["maNhom"], value: maNhom.slice(2, 4) },
  ];

  return filledFields;
};
