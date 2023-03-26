import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieShowtime } from "../../redux/actions/movieAction/getMovieShowtime";
import CreateShowtimePageForm from "./CreateShowtimePageForm";
import CreateShowtimePageShowtimeList from "./CreateShowtimePageShowtimeList";

export default function CreateShowtimePage() {
  const { movieID } = useParams();
  const [movieShowtime, setMovieShowtime] = useState();

  const handleGetMovieShowtime = () => {
    getMovieShowtime({
      movieID,
      onSuccess: (success) => {
        setMovieShowtime(success.data.content);
      },
    });
  };

  useEffect(() => {
    handleGetMovieShowtime();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <>
        {movieShowtime && (
          <div className="container mx-auto flex flex-wrap flex-col-reverse lg:grid grid-cols-2 gap-10 lg:gap-10 p-5 md:px-20 md:py-10">
            {movieShowtime.heThongRapChieu.length > 0 && (
              <CreateShowtimePageShowtimeList movieShowtime={movieShowtime} />
            )}
            <CreateShowtimePageForm
              handleGetMovieShowtime={handleGetMovieShowtime}
              movieShowtime={movieShowtime}
            />
          </div>
        )}
      </>
    </>
  );
}
