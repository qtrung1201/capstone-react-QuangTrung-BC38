import React from "react";
import { useDispatch } from "react-redux";
import ActionButtonGroup from "../../Components/UtilComponents/Form/ActionButtonGroup";
import { deleteMovie } from "../../redux/actions/movieAction/deleteMovie";
import { getMovieList } from "../../redux/actions/movieAction/getMovieList";

export default function MovieListPageMovieAction({ movieID }) {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(getMovieList());
  };

  return (
    <>
      <ActionButtonGroup
        list="movie"
        editPath={`/administration/movie-edit/${movieID}`}
        addingPath={`/administration/create-showtime/${movieID}`}
        handle={() => {
          deleteMovie(movieID, onSuccess);
        }}
      />
    </>
  );
}
