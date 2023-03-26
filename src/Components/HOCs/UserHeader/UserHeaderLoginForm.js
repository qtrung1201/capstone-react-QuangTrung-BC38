import { Dropdown } from "flowbite-react";
import React from "react";
import LoginForm from "../../UtilComponents/Form/LoginForm";
import UserHeaderLoginIcon from "./UserHeaderLoginIcon";

export default function UserHeaderLoginForm() {
  return (
    <>
      <Dropdown label={<UserHeaderLoginIcon />} inline={true} arrowIcon={false}>
        <div className="w-64 px-6 pt-6">
          <LoginForm />
        </div>
      </Dropdown>
    </>
  );
}
