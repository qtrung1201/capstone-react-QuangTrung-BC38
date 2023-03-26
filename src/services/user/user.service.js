import { groupID, https } from "../configURL";

export const userService = {
  getUserList: () => {
    return https.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`
    );
  },
  postAdminGetUserInfo: (account) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${account}`
    );
  },

  postLogin: (loginData) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", loginData);
  },
  postSignUp: (signUpData) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", signUpData);
  },
  postAddUser: (userInfo) => {
    return https.post("/api/QuanLyNguoiDung/ThemNguoiDung", userInfo);
  },
  postGetUserInfo: (account) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${account}`
    );
  },

  putUserUpdateInfo: (updateData) => {
    return https.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      updateData
    );
  },
  postAdminEditInfo: (updateData) => {
    return https.post(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      updateData
    );
  },

  deleteAccount: (account) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`
    );
  },
};
