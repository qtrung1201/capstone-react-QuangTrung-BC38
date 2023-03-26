import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const getMovieShowtime = ({ movieID, onSuccess }) => {
  movieService
    .getMovieShowtime(movieID)
    .then((success) => {
      onSuccess(success);
    })
    .catch((error) => {
      openNotification({
        message: (
          <p className="text-red-500 m-0">Lấy thông tin lịch chiếu thất bại!</p>
        ),
        description: error.response.data.content,
      });
    });
};
