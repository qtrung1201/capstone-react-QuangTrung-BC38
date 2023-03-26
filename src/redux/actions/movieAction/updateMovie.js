import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const updateMovie = (movieData, onSuccess) => {
  movieService
    .postUpdateMovie(movieData)
    .then(() => {
      onSuccess();
      openNotification({
        message: (
          <p className="text-green-700 m-0">Cập nhật thông tin phim thành công.</p>
        ),
      });
    })

    .catch((error) => {
      openNotification({
        message: <p className="text-red-500 m-0"> Cập nhật thông tin phim thất bại!</p>,
        description: error.response.data
          ? error.response.data.content
          : error.name + " " + error.message,
      });
    });
};
