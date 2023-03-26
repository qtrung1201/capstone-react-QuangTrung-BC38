import { https } from "../configURL";

export const bookingService = {
  getCinemaRoomInfo: (showtimeID) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showtimeID}`
    );
  },

  postBooking: (ticketList) => {
    return https.post("/api/QuanLyDatVe/DatVe", ticketList);
  },
};
