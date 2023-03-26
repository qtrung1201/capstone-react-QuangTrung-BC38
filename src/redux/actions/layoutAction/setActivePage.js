import { SET_ACTIVE_PAGE } from "../../constants/layoutActionTypes";

export const setActivePage = (path) => ({
  type: SET_ACTIVE_PAGE,
  path,
});
