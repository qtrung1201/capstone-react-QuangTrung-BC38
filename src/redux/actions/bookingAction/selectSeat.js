import { SELECT_SEAT } from "../../constants/bookingActionTypes";

export const selectSeat = (seat = {}) => ({
  type: SELECT_SEAT,
  seat,
});
