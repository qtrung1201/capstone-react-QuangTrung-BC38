import { Dropdown } from "flowbite-react";
import React from "react";
import UserHeaderLoginIcon from "./UserHeaderLoginIcon";
import { HiOutlineRefresh, HiLogout, HiOutlineTicket } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userAction/logout";
import { NavLink } from "react-router-dom";

export default function UserHeaderLoginInfo({ userInfo }) {
  const dispatch = useDispatch();
  return (
    <Dropdown label={<UserHeaderLoginIcon />} inline={true} arrowIcon={false}>
      <Dropdown.Header>
        <p className="text-sm">{userInfo.hoTen}</p>
        <p className="text-sm font-medium truncate">{userInfo.email}</p>
      </Dropdown.Header>

      <NavLink to="/user-detail">
        <Dropdown.Item icon={HiOutlineTicket}>Thông tin đặt vé</Dropdown.Item>
      </NavLink>

      <NavLink to="/user-detail">
        <Dropdown.Item icon={HiOutlineRefresh}>Cập nhật</Dropdown.Item>
      </NavLink>

      <Dropdown.Item
        icon={HiLogout}
        onClick={() => {
          dispatch(logout());
        }}
      >
        Đăng xuất
      </Dropdown.Item>
    </Dropdown>
  );
}
