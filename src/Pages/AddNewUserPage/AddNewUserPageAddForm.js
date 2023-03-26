import React from "react";
import AddUserEditUserForm from "../../Components/UtilComponents/Form/AddUserEditUserForm";
import { adminAddNewUser } from "../../redux/actions/userAction/adminAddNewUser";

export default function AddNewUserPageAddForm({ getUserInfo }) {
  const onSubmit = (userInfo) => {
    getUserInfo(userInfo);
    adminAddNewUser(userInfo);
  };

  return (
    <>
      <AddUserEditUserForm form="add" onSubmit={onSubmit} />
    </>
  );
}
