import styled from "styled-components";

export default styled.span`
  position: relative;
  padding: 0rem 0.75rem;
  color: ${(props) => props.theme.text.color01};

  &:before {
    content: "";
    width: 0rem;
    height: 0.125rem;
    position: absolute;
    top: 50%;
    right: 0;
    background-color: ${(props) => props.theme.text.color01};
    transition: 0.5s;
  }

  &:hover {
    &:before {
      width: calc(100% - 0.75rem);
      left: 0.375rem;
      right: auto;
    }
  }
`;
