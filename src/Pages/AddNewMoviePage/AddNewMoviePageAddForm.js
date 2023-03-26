import React from "react";
import AddMovieEditMovieForm from "../../Components/UtilComponents/Form/AddMovieEditMovieForm";
import { addNewMovie } from "../../redux/actions/movieAction/addNewMovie";

export default function AddNewMoviePageAddForm() {
  const onSubmit = (movieData) => {
    addNewMovie(movieData);
  };

  return (
    <>
      <AddMovieEditMovieForm onSubmit={onSubmit} />
    </>
  );
}
