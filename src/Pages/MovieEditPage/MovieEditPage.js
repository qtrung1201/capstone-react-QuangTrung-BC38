import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fillMovieFields } from "../../Components/UtilComponents/Form/filledFields";
import { movieService } from "../../services/movie/movie.service";
import MovieEditPageEditForm from "./MovieEditPageEditForm";
import MovieEditPageInfoForm from "./MovieEditPageInfoForm";

export default function MovieEditPage() {
  const { movieID } = useParams();

  const [movieInfo, setMovieInfo] = useState();

  const [filledFields, setFilledFields] = useState();

  const getMovieInfo = useCallback(() => {
    movieService
      .getMovieInfo(movieID)
      .then((success) => {
        const movieInfo = success.data.content;
        const filledFields = fillMovieFields(movieInfo);

        setMovieInfo(movieInfo);
        setFilledFields(filledFields);
      })
      .catch(() => {});
  }, [movieID]);

  useEffect(() => {
    getMovieInfo();
  }, [getMovieInfo]);

  return (
    <>
      {movieInfo && (
        <div className="container mx-auto flex flex-wrap flex-col-reverse lg:grid grid-cols-2 gap-10 lg:gap-20 p-5 md:p-10">
          <MovieEditPageInfoForm movieInfo={movieInfo} />
          <MovieEditPageEditForm
            movieID={movieID}
            filledFields={filledFields}
            onSuccess={getMovieInfo}
          />
        </div>
      )}
    </>
  );
}
