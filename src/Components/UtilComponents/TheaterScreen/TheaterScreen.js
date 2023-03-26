import styled from "styled-components";

export const TheaterScreen = styled.div`
  width: 75vw;
  height: 25vw;
  position: relative;
  border-left: 5vw solid transparent;
  border-right: 5vw solid transparent;
  border-top: 5vw solid ${(props) => props.theme.background.color03};
  border-radius: 50%;

  &:before {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 2.5vw;
    left: 0%;
    content: "${(props) => props.before}";
  }

  @media (min-width: 1024px) {
    width: 50vw;
    height: 15vw;
    border-left: 4vw solid transparent;
    border-right: 4vw solid transparent;
    border-top: 4vw solid ${(props) => props.theme.background.color03};
  }
`;
