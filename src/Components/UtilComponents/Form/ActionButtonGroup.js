import { Button } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ActionButtonGroup({
  list = "user",
  editPath,
  addingPath,
  handle = () => {},
}) {
  return (
    <>
      <div className="flex justify-center">
        <NavLink to={editPath}>
          <Button
            className="flex items-center mr-2"
            type="dash"
            shape="round"
            icon={<EditOutlined />}
          >
            Chỉnh sửa
          </Button>
        </NavLink>

        <Button
          type="dash"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handle}
        />
      </div>

      {list === "movie" ? (
        <div className="flex justify-center mt-3">
          <NavLink to={addingPath}>
            <Button
              className="flex items-center mr-2"
              type="dash"
              shape="round"
              icon={<PlusCircleOutlined />}
            >
              Thêm lịch chiếu
            </Button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
