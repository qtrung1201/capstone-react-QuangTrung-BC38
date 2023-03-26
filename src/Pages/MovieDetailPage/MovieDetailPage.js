import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import { convertMovieList } from "../../services/movie/convertMovieData";
import { movieService } from "../../services/movie/movie.service";
import HomePageThearterTabs from "../HomePage/HomePageThearterTabs";
import MovieDetailPageInfo from "./MovieDetailPageInfo";

const P = styled.p`
  color: ${(props) => props.theme.text.color01};
`;

export default function MovieDetailPage() {
  const { movieID } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(`/movie-detail/${movieID}`));

    movieService
      .getMovieInfo(movieID)
      .then((success) => {
        // convertMovieList là hàm map, chỉ chạy với array và trả về array
        const movieInfo = convertMovieList([success.data.content]);
        setMovieInfo(movieInfo[0]);
      })
      .catch(() => {});
  }, [dispatch, movieID]);

  return (
    <>
      {movieInfo && <MovieDetailPageInfo movieInfo={movieInfo} />}

      <div className="container mx-auto">
        <P className="pt-5 pb-5 px-3 text-2xl">Mua vé theo cụm rạp</P>
        <HomePageThearterTabs />
      </div>
    </>
  );
}
