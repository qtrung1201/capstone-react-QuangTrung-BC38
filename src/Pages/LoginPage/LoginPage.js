import { Tooltip } from "antd";
import React from "react";
import SpaceMail from "../../Components/UtilComponents/Animation/SpaceMail";
import LoginPageLoginForm from "./LoginPageLoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-start px-3">
        <div className="w-0 sm:w-1/2">
          <SpaceMail width={"100%"} />
        </div>

        <div className="w-3/4 sm:w-1/2 mt-10 sm:px-8 md:px-16 lg:px-32">
          <LoginPageLoginForm />

          <Tooltip
            title={
              <p>
                Tài khoản: newUser
                <br />
                Mật khẩu: newUser
              </p>
            }
            placement="bottom"
          >
            <p className="mt-5 text-gray-300 text-center">
              Lấy tài khoản quản trị.
            </p>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
