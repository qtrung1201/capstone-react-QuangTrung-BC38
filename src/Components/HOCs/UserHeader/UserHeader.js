import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StyledSpan from "../../StyledComponents/StyledSpan";
import UserHeaderNavbar from "./UserHeaderNavbar";
import UserHeaderLogin from "./UserHeaderLogin";
import { HiOutlineMenu } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import UserMinScreenAlert from "../../UtilComponents/MinScreenAlert/UserMinScreenAlert";
import { useSelector } from "react-redux";
import UserHeaderLoginInfoSmallScreen from "./UserHeaderLoginInfoSmallScreen";

const Div = styled.div`
  background-color: ${(props) => props.theme.background.color01};
`;

const Span = styled.span`
  color: ${(props) => props.theme.text.color01};
  cursor: pointer;
`;

export default function UserHeader({ Component }) {
  const [showNavBars, setShowNavBars] = useState(false);
  const { userInfo } = useSelector((state) => state.userReducer);

  // https://www.npmjs.com/package/react-responsive
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });

  const toggleNavBars = () => {
    showNavBars ? setShowNavBars(false) : setShowNavBars(true);
  };

  const toggleButton = (
    <Span className="text-4xl" onClick={toggleNavBars}>
      <HiOutlineMenu />
    </Span>
  );

  const navbarCollapse = (
    <div className="flex flex-col items-center py-5 bg-white">
      <UserHeaderNavbar />

      <UserHeaderLoginInfoSmallScreen userInfo={userInfo} />
    </div>
  );

  return (
    <>
      <Div>
        <div className="container mx-auto flex flex-wrap justify-center items-center p-3">
          <NavLink to="/" className="mr-auto text-4xl">
            <StyledSpan>TETRIS</StyledSpan>
          </NavLink>

          {isSm && <UserHeaderNavbar />}

          <div className="flex items-center ml-auto">
            <Span className="inline-block px-1">VN</Span>
            <Span className="inline-block px-1">|</Span>
            <Span className="inline-block px-1">EN</Span>

            {isSm ? <UserHeaderLogin /> : toggleButton}
          </div>
        </div>
        {showNavBars && !isSm && navbarCollapse}
      </Div>

      {Component}

      <UserMinScreenAlert />
    </>
  );
}
