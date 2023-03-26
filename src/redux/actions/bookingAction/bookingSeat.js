import { bookingService } from "../../../services/booking/booking.service";
import { openNotification } from "../../../utils/openNotification/openNotification";
import { getCinemaRoomInfo } from "./getCinemaRoomInfo";

export const bookingSeat = (showtimeID, seatList) => {
  const ticketList = {
    maLichChieu: showtimeID,
    danhSachVe: seatList,
  };

  return (dispatch) => {
    bookingService
      .postBooking(ticketList)
      .then(() => {
        openNotification({
          message: <p className="text-green-500 m-0">Đặt vé thành công!</p>,
        });

        dispatch(getCinemaRoomInfo(showtimeID));
      })
      .catch(() => {});
  };
};
