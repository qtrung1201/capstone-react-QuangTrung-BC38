import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledDarkButton } from "../../Components/StyledComponents/StyledButton";
import MovieCard from "../../Components/UtilComponents/MovieCard/MovieCard";
import { renderMovieList } from "../../utils/renderMovieList/renderMovieList";

const Span = styled.span`
  color: ${(props) => props.theme.text.color01};
`;

export default function HomePageMovieList() {
  const { movieList } = useSelector((state) => state.movieReducer);
  const [renderList, setRenderList] = useState();

  const nowShowingList = useMemo(
    () =>
      movieList &&
      renderMovieList.renderMovieList(
        movieList,
        MovieCard,

        0,
        8,

        renderMovieList.filterHomePageMovieList(movieList)
      ),
    [movieList]
  );

  useEffect(() => {
    // vì kết quả bây giờ luôn trả về dưới dạng promise, nên phải .then và setState để lấy kết quả
    const newRenderList = () => {
      return new Promise((resolve) => {
        resolve(nowShowingList);
      });
    };
    newRenderList().then((renderList) => setRenderList(renderList));
  }, [nowShowingList]);

  return (
    <>
      <div className="container mx-auto px-3 pb-12">
        <Span className="inline-block my-8 text-2xl">Phim đang chiếu</Span>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 sm:gap-x-8 md:gap-x-10 lg:gap-x-12 gap-y-7">
          {renderList}
        </div>

        <NavLink to="/movies">
          <StyledDarkButton className="block ml-auto mt-6 px-4 py-1">
            Xem thêm
          </StyledDarkButton>
        </NavLink>
      </div>
    </>
  );
}
