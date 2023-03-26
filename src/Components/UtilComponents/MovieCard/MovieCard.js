import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { StyledLightButton } from "../../StyledComponents/StyledButton";
import styles from "./movieCard.module.css";

const Div = styled.div`
  background-color: ${(props) => props.theme.background.color01};
`;

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="w-full flex flex-col justify-between overflow-hidden">
        <Div className={styles.movieCardImg}>
          <img className="w-full object-contain" src={movie.image} alt="..." />
          <div className={styles.movieCardLayer}>
            <NavLink to={`/movie-detail/${movie.movieID}`}>
              <StyledLightButton className="text-xs sm:text-base">
                Chi tiết
              </StyledLightButton>
            </NavLink>
          </div>
        </Div>
        <span className="h-4 sm:h-6 inline-block mt-1 lg:mt-2 text-xs md:text-base lg:text-lg">
          {movie.movieName.toUpperCase()}
        </span>
      </div>
    </>
  );
}
