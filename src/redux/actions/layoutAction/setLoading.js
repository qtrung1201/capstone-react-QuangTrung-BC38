import { SET_LOADING } from "../../constants/layoutActionTypes";

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading,
});
