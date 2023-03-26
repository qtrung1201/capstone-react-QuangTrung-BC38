import React from "react";
import AddMovieEditMovieForm from "../../Components/UtilComponents/Form/AddMovieEditMovieForm";
import { updateMovie } from "../../redux/actions/movieAction/updateMovie";

export default function MovieEditPageEditForm({
  movieID,
  filledFields,
  onSuccess,
}) {
  const onSubmit = (movieData, success = onSuccess) => {
    updateMovie(movieData, success);
  };

  return (
    <>
      <AddMovieEditMovieForm
        onSubmit={onSubmit}
        fields={filledFields}
        movieID={movieID}
        form="edit"
      />
    </>
  );
}
