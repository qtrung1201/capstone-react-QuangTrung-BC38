import styled from "styled-components";

export const PlayButtonStyled = styled.div`
  height: 100%;

  .circle {
    stroke: #f8aa28;
    stroke-dasharray: 650;
    stroke-dashoffset: 650;
    -webkit-transition: all 0.5s ease-in-out;
    opacity: 0.3;
  }

  .playBut {
    display: inline-block;
    -webkit-transition: all 0.5s ease;
    background: transparent;
    border: none;

    .triangle {
      -webkit-transition: all 0.7s ease-in-out;
      stroke-dasharray: 240;
      stroke-dashoffset: 480;
      stroke: #000;
      transform: translateY(0);
    }

    &:hover {
      .triangle {
        stroke-dashoffset: 0;
        opacity: 1;
        stroke: #f8aa28;
        animation: nudge 0.7s ease-in-out;

        @keyframes nudge {
          0% {
            transform: translateX(0);
          }
          30% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          70% {
            transform: translateX(-2px);
          }
          100% {
            transform: translateX(0);
          }
        }
      }

      .circle {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }
  }
`;
