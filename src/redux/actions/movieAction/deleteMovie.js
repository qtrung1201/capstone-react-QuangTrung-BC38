import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const deleteMovie = (movieID, onSuccess) => {
  movieService
    .deleteMovie(movieID)
    .then(() => {
      openNotification({
        message: <p className="text-green-700">Xoá phim thành công.</p>,
      });
      onSuccess();
    })

    .catch((error) => {
      openNotification({
        message: <p className="text-red-500 m-0">Xoá phim thất bại.</p>,
        description: error.response.data.content,
      });
    });
};
