import { bookingService } from "../../../services/booking/booking.service";
import { GET_CINEMA_ROOM_INFO } from "../../constants/bookingActionTypes";

export const getCinemaRoomInfo = (showtimeID) => {
  return (dispatch) => {
    bookingService
      .getCinemaRoomInfo(showtimeID)
      .then((success) => {
        const cinemaRoomInfo = success.data.content;

        dispatch({
          type: GET_CINEMA_ROOM_INFO,
          cinemaRoomInfo,
        });
      })
      .catch(() => {});
  };
};
