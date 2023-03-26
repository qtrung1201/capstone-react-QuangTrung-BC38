import { groupID, https } from "../configURL";

export const movieService = {
  getMovieList: () => {
    return https.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`);
  },
  getMovieInfo: (movieID) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieID}`);
  },
  getMovieShowtime: (movieID) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieID}
  `);
  },
  postNewShowtime: (showtime) => {
    return https.post("/api/QuanLyDatVe/TaoLichChieu", showtime);
  },
  postUpdateMovie: (movieData) => {
    return https.post("/api/QuanLyPhim/CapNhatPhimUpload", movieData);
  },
  postNewMovie: (movieData) => {
    return https.post("/api/QuanLyPhim/ThemPhimUploadHinh", movieData);
  },
  deleteMovie: (movieID) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${movieID}`);
  },
};
