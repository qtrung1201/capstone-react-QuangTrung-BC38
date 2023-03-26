import { defaultCinemaRoomInfo } from "../../assets/defaultData/defaultCinemaRoomInfo";
import { openNotification } from "../../utils/openNotification/openNotification";
import {
  GET_CINEMA_ROOM_INFO,
  SELECT_SEAT,
} from "../constants/bookingActionTypes";

const initialState = {
  cinemaRoomInfo: defaultCinemaRoomInfo,
  selectedSeatList: [],
};

export const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CINEMA_ROOM_INFO:
      state.cinemaRoomInfo = action.cinemaRoomInfo;
      state.selectedSeatList = [];
      return { ...state };

    case SELECT_SEAT:
      let newSelectedSeatList = [...state.selectedSeatList];

      const index = newSelectedSeatList.findIndex(
        (item) => item.maGhe === action.seat.maGhe
      );

      if (index === -1) {
        if (newSelectedSeatList.length >= 10) {
          openNotification({
            message: (
              <p className="text-yellow-500 m-0 p-0">
                Bạn không thể chọn quá 10 ghế.
              </p>
            ),
          });
        } else {
          newSelectedSeatList.push(action.seat);
        }
      } else {
        newSelectedSeatList.splice(index, 1);
      }

      state.selectedSeatList = newSelectedSeatList;
      return { ...state };

    default:
      return state;
  }
};
