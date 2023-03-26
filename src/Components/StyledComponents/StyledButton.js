import styled from "styled-components";

export const StyledLightButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid white;
  color: white;
  transition: 0.3s;

  &:hover {
    border-color: ${(props) => props.theme.background.color01};
    background-color: ${(props) => props.theme.background.color01};
    color: ${(props) => props.theme.text.color01};
    font-weight: 500;
  }
`;
export const StyledDarkButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid ${(props) => props.theme.text.color01};
  color: ${(props) => props.theme.text.color01};
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.text.color01};
    color: ${(props) => props.theme.background.color01};
  }
`;
