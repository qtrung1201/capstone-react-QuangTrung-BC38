import React from "react";
import { HiOutlineTicket, HiOutlineRefresh, HiLogout } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import { logout } from "../../../redux/actions/userAction/logout";
import StyledSpan from "../../StyledComponents/StyledSpan";

// const P = styled.p`
//   margin-bottom: 0rem;
//   border-color: ${(props) => props.theme.text.color01};
//   color: ${(props) => props.theme.text.color01};
// `;

export default function UserHeaderLoginInfoSmallScreen({ userInfo }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex flex-wrap justify-start pt-5 px-5">
        {userInfo ? (
          <>
            <p className="w-full pt-2 pb-2 overflow-scroll">
              Tài khoản: {userInfo.taiKhoan}
            </p>

            <NavLink to="/user-detail">
              <p className="flex items-center pr-3 gap-1">
                <HiOutlineTicket />
                Thông tin đặt vé
              </p>
            </NavLink>

            <NavLink to="/user-detail">
              <p className="flex items-center pr-3 gap-1">
                <HiOutlineRefresh />
                Cập nhật
              </p>
            </NavLink>

            <p
              className="flex items-center pr-3 gap-1 cursor-pointer"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <HiLogout />
              Đăng xuất
            </p>
          </>
        ) : (
          <>
            <NavLink to="/login" className="w-full block text-center">
              <StyledSpan>Đăng nhập</StyledSpan>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}
