import React from "react";
import { adminEditInfo } from "../../redux/actions/userAction/adminEditInfo";
import AddUserEditUserForm from "../../Components/UtilComponents/Form/AddUserEditUserForm";

export default function UserEditPageEditForm({
  onChange,
  onSuccess,
  defaultFields,
  filledFields,
  userPassword,
}) {
  const onSubmit = (updateData, success = onSuccess) => {
    adminEditInfo(updateData, success);
  };

  return (
    <>
      <AddUserEditUserForm
        form={"edit"}
        onChange={onChange}
        onSubmit={onSubmit}
        defaultFields={defaultFields}
        filledFields={filledFields}
        userPassword={userPassword}
      />
    </>
  );
}
