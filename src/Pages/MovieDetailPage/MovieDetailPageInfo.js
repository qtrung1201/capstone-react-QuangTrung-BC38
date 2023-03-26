import moment from "moment";
import React from "react";
import styled from "styled-components";
import MovieTrailerCard from "../../Components/UtilComponents/MovieCard/MovieTrailerCard";
import ProgressCircle from "../../Components/UtilComponents/ProgressCircle/ProgressCircle";

const P = styled.p`
  padding-top: 2rem;
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme.text.color01};
`;

export default function MovieDetailPageInfo({ movieInfo }) {
  const {
    movieName,
    hyphentedMovieName,
    movieDescription,
    rate,
    premiereDate,
  } = movieInfo;

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap my-12">
          <div className="w-full sm:w-1/4">
            <MovieTrailerCard movie={movieInfo} width={"100%"} />
          </div>

          <div className="w-full sm:w-3/4 flex">
            <div className="w-full md:w-2/3 px-3 sm:px-10 text-lg">
              <p className="mt-5 sm:mt-0 text-2xl sm:text-4xl">
                {movieName.toUpperCase()}
              </p>
              <p className="text-gray-500">{hyphentedMovieName}</p>

              <P className="text-lg lg:text-2xl">Nội dung phim</P>
              <p className="h-28 lg:h-max pr-3" style={{ overflow: "overlay" }}>
                {movieDescription}
              </p>

              <P className="inline-block mr-2 text-lg lg:text-2xl">
                Ngày khởi chiếu:
              </P>
              <span className="text-lg lg:text-2xl">
                {moment(premiereDate).format("DD/MM/YYYY")}
              </span>
            </div>

            <div className="w-1/3 hidden md:flex flex-col justify-center items-center">
              <ProgressCircle rate={rate} multiplier={10} />
              <P className="pt-8 text-lg lg:text-xl">
                Điểm đánh giá: {rate}/10
              </P>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
