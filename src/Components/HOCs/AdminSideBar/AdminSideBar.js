import {
  HiClipboardList,
  HiOutlineFilm,
  HiOutlineUser,
  HiOutlineUserAdd,
} from "react-icons/hi";
import { Dropdown, Sidebar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";
import AdminMinScreenAlert from "../../UtilComponents/MinScreenAlert/AdminMinScreenAlert";

export default function AdminSideBar({ Component }) {
  return (
    <>
      <div className="flex">
        <div>
          <div className="w-fit h-screen sticky left-0 top-0 py-10 border">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <NavLink to="/">
                    <div className="w-full mb-10 text-4xl text-center">
                      TETRIS
                    </div>
                  </NavLink>

                  <Sidebar.Collapse
                    icon={HiOutlineUser}
                    label="Quản lý người dùng"
                  >
                    <NavLink to="/administration/add-new-user" className="p-0">
                      <Dropdown.Item icon={HiOutlineUserAdd}>
                        Thêm người dùng
                      </Dropdown.Item>
                    </NavLink>

                    <NavLink to="/administration/user-list" className="p-0">
                      <Dropdown.Item icon={HiClipboardList}>
                        Danh sách người dùng
                      </Dropdown.Item>
                    </NavLink>
                  </Sidebar.Collapse>

                  <Sidebar.Collapse icon={HiOutlineFilm} label="Quản lý phim">
                    <NavLink to="/administration/add-new-movie" className="p-0">
                      <Dropdown.Item icon={HiOutlineFilm}>
                        Thêm phim
                      </Dropdown.Item>
                    </NavLink>

                    <NavLink to="/administration/movie-list" className="p-0">
                      <Dropdown.Item icon={HiClipboardList}>
                        Danh sách phim
                      </Dropdown.Item>
                    </NavLink>
                  </Sidebar.Collapse>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
        </div>
        <div className="w-screen" style={{ maxWidth: "calc(100% - 258px)" }}>
          {Component}
        </div>
      </div>

      <AdminMinScreenAlert />
    </>
  );
}
