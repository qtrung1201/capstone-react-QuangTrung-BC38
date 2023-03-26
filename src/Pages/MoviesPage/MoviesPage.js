import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import MoviesPageMovieList from "./MoviesPageMovieList";

export default function MoviesPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage("/movies"));
  }, [dispatch]);
  return (
    <>
      <MoviesPageMovieList />
    </>
  );
}
