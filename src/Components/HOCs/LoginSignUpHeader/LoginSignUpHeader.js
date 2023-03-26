import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledSpan from "../../StyledComponents/StyledSpan";
import UserMinScreenAlert from "../../UtilComponents/MinScreenAlert/UserMinScreenAlert";

const Div = styled.div`
  background-color: ${(props) => props.theme.background.color01};
`;

export default function LoginSignUpHeader({ Component }) {
  return (
    <>
      <Div>
        <div className="container mx-auto p-3">
          <NavLink to="/" className="text-4xl">
            <StyledSpan>TETRIS</StyledSpan>
          </NavLink>
        </div>
      </Div>

      {Component}

      <UserMinScreenAlert />
    </>
  );
}
