import React from "react";
import { deleteAccount } from "../../redux/actions/userAction/deleteAccount";
import ActionButtonGroup from "../../Components/UtilComponents/Form/ActionButtonGroup";

export default function UserListPageUserAction({ account, onSuccess }) {
  const deleteUser = () => {
    deleteAccount(account, onSuccess);
  };

  return (
    <>
      <ActionButtonGroup
        editPath={`/administration/user-edit/${account}`}
        handle={deleteUser}
      />
    </>
  );
}
