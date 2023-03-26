import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const createNewShowtime = ({ showtimeInfo, onSuccess }) => {
  movieService
    .postNewShowtime(showtimeInfo)
    .then(() => {
      openNotification({
        message: (
          <p className="text-green-700 m-0">Tạo lịch chiếu thành công!</p>
        ),
      });
      onSuccess();
    })
    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Tạo lịch chiếu không thành công!</p>
        ),
        description: error.response.data.content,
      });
    });
};
