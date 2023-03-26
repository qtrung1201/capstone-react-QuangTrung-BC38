import React from "react";
import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi";
import { useSelector } from "react-redux";

const P = styled.p`
  margin-bottom: 0rem;
  border-color: ${(props) => props.theme.text.color01};
  color: ${(props) => props.theme.text.color01};
`;

export default function UserHeaderLoginIcon() {
  const { userInfo } = useSelector((state) => state.userReducer);

  return (
    <>
      <P className="w-8 h-8 flex justify-center items-center ml-3 border-2 rounded-full text-2xl">
        {!userInfo ? (
          <HiOutlineUser />
        ) : (
          userInfo.hoTen.slice(0, 1).toUpperCase()
        )}
      </P>
    </>
  );
}
