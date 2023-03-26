import React from "react";
import UserHeaderLoginForm from "./UserHeaderLoginForm";
import { useSelector } from "react-redux";
import UserHeaderLoginInfo from "./UserHeaderLoginInfo";

export default function UserHeaderLogin() {
  const { userInfo } = useSelector((state) => state.userReducer);

  return (
    <>
      {userInfo ? (
        <UserHeaderLoginInfo userInfo={userInfo} />
      ) : (
        <UserHeaderLoginForm />
      )}
    </>
  );
}
