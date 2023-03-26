import styled from "styled-components";

export const SeatContainer = styled.div`
  width: 60vw;
  margin-top: -12vw;
  margin-left: 7.5vw;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  gap: 1.5vw 0.45vw;
  flex-grow: 1;
  font-size: 1.5vw;
  z-index: 10;

  @media (min-width: 1024px) {
    width: 40vw;
    margin-top: -5vw;
    margin-left: 5vw;
    font-size: 1vw;
  }
`;
