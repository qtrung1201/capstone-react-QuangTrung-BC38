import { convertMovieList } from "../../../services/movie/convertMovieData";
import { movieService } from "../../../services/movie/movie.service";
import { openNotification } from "../../../utils/openNotification/openNotification";
import { GET_MOVIE_LIST } from "../../constants/movieActionTypes";

export const getMovieList = () => {
  return (dispatch) => {
    movieService
      .getMovieList()
      .then((success) => {
        const movieList = convertMovieList(success.data.content);
        dispatch({
          type: GET_MOVIE_LIST,
          movieList: movieList,
        });
      })
      .catch((error) => {
        openNotification({
          message: (
            <p className="text-red-500 m-0">Lấy danh sách phim thất bại.</p>
          ),
          description: error.response.data.content,
        });
      });
  };
};
