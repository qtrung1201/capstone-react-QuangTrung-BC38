import { combineReducers } from "redux";
import { bookingReducer } from "./bookingReducer";
import { layoutReducer } from "./layoutReducer";
import { movieReducer } from "./movieReducer";
import { theaterReducer } from "./theaterReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  movieReducer,
  theaterReducer,
  layoutReducer,
  bookingReducer,
});
