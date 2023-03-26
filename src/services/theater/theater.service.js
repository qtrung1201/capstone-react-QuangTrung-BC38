import { groupID, https } from "../configURL";

export const theaterService = {
  getTheaterList: () => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${groupID}`
    );
  },
  getTheaterChainInfo: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getTheaterInfo: (theaterChainID) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${theaterChainID}`
    );
  },
};
