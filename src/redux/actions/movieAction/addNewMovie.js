import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";

export const addNewMovie = (movieData) => {
  movieService
    .postNewMovie(movieData)
    .then(() => {
      openNotification({
        message: <p className="text-green-700 m-0">Thêm phim thành công.</p>,
      });
    })

    .catch((error) => {
      openNotification({
        message: <p className="text-red-500 m-0">Thêm phim thất bại.</p>,
        description: (
          <>
            <p>{error.response.data.content}</p>
            <p className="text-red-500">{error.message}</p>
          </>
        ),
      });
    });
};
