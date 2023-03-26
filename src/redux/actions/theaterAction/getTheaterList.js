import { theaterService } from "../../../services/theater/theater.service";
import { openNotification } from "../../../utils/openNotification/openNotification";
import { GET_THEATER_DATA } from "../../constants/theaterActionTypes";

export const getTheaterList = () => {
  return (dispatch) => {
    theaterService
      .getTheaterList()
      .then((success) => {
        const theaterData = success.data.content;
        dispatch({
          type: GET_THEATER_DATA,
          theaterData,
        });
      })

      .catch((error) => {
        openNotification({
          message: (
            <p className="text-red-500 m-0">
              Lấy danh sách thông tin rạp chiếu thất bại!
            </p>
          ),
          description: error.response.data.content,
        });
      });
  };
};
