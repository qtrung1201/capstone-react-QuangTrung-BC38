import { Button } from "antd";
import React from "react";

export default function FormButton({
  icon,
  content,
  type = "button",
  handle = () => {},
}) {
  return (
    <>
      <Button
        className="flex justify-center items-center mr-1 mb-1"
        type="dash"
        shape="round"
        icon={icon}
        onClick={handle}
        htmlType={type}
      >
        {content}
      </Button>
    </>
  );
}
