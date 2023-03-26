import styled from "styled-components";

export const TheaterSeat = styled.button`
  width: 100%;
  height: 2.75vw;
  position: relative;

  background-color: ${(props) => {
    switch (props.seat) {
      case "normal":
        return props.theme.background.color03;

      case "vip":
        return props.theme.background.color04;

      case "booked":
        return props.theme.text.color01;

      case "selected":
        return props.theme.background.color05;

      default:
        return props.theme.background.color03;
    }
  }};

  border-radius: 15%;
  text-align: center;

  color: ${(props) => {
    switch (props.seat) {
      case "booked":
      case "selected":
        return props.theme.background.color03;

      default:
        return "transparent";
    }
  }};

  overflow: ${(props) => (props.before ? "" : "hidden")};
  cursor: default;

  transform: ${(props) => {
    switch (props.seat) {
      case "selected":
        return "scale(1.2)";

      default:
        return "scale(1)";
    }
  }};

  transition: 0.25s;

  &:hover {
    color: ${(props) => {
      switch (props.seat) {
        case "booked":
        case "selected":
          return props.theme.background.color03;

        default:
          return "black";
      }
    }};

    cursor: ${(props) => {
      switch (props.seat) {
        case "booked":
          return "default";

        default:
          return "pointer";
      }
    }};

    transform: ${(props) => {
      switch (props.seat) {
        case "booked":
          return "scale(1)";

        default:
          return "scale(1.2)";
      }
    }};
  }

  &:before {
    width: max-content;
    position: absolute;
    bottom: -0.125vw;
    left: 3vw;
    color: black;
    font-size: 2vw;
    content: "${(props) => props.before}";
  }

  @media (min-width: 1024px) {
    height: 1.75vw;

    &:before {
      left: 2vw;
      font-size: 1vw;
    }
  }
`;
