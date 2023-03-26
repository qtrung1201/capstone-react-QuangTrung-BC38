import { Dropdown } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import StyledSpan from "../../StyledComponents/StyledSpan";

export default function UserHeaderNavbar() {
  const { activePage } = useSelector((state) => state.layoutReducer);

  return (
    <>
      <div className="flex flex-wrap items-center">
        <NavLink to="/">
          <StyledSpan style={activePage === "/" ? { color: "gray" } : {}}>
            Trang chủ
          </StyledSpan>
        </NavLink>

        <NavLink to="/movies">
          <StyledSpan style={activePage === "/movies" ? { color: "gray" } : {}}>
            Phim đang chiếu
          </StyledSpan>
        </NavLink>

        <Dropdown
          label={<StyledSpan>Giới thiệu</StyledSpan>}
          inline={true}
          arrowIcon={false}
        >
          <Dropdown.Item>
            <NavLink to="/support">Hỗ trợ</NavLink>
          </Dropdown.Item>

          <Dropdown.Item>
            <NavLink to="/administration/user-list">Quản lý</NavLink>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
}
