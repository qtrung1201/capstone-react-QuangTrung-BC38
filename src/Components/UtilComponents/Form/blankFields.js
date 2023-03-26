import { groupID } from "../../../services/configURL";

export const userBlankFields = [
  { name: ["taiKhoan"], value: "" },
  { name: ["matKhau"], value: "" },
  { name: ["maLoaiNguoiDung"], value: "KhachHang" },
  { name: ["maNhom"], value: groupID.slice(2) },
  { name: ["hoTen"], value: "" },
  { name: ["email"], value: "" },
  { name: ["soDT"], value: "" },
];

export const movieBlankFields = [
  { name: ["tenPhim"], value: "" },
  { name: ["trailer"], value: "" },
  { name: ["moTa"], value: "" },
  { name: ["ngayKhoiChieu"], value: "" },
  { name: ["trangThaiCongChieu"], value: "DangChieu" },
  { name: ["hot"], value: false },
  { name: ["danhGia"], value: "" },
  { name: ["maNhom"], value: "07" },
  { name: ["hinhAnh"], value: "" },
];
