import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fillUserFields } from "../../Components/UtilComponents/Form/filledFields";
import { userService } from "../../services/user/user.service";
import UserEditPageEditForm from "./UserEditPageEditForm";
import UserEditPageInfoForm from "./UserEditPageInfoForm";

export default function UserEditPage() {
  const { account } = useParams();

  const [userInfo, setUserInfo] = useState();
  const [defaultFields, setDefaultFields] = useState();
  const [filledFields, setFilledFields] = useState();

  const getUserInfo = useCallback(() => {
    userService
      .postAdminGetUserInfo(account)
      .then((success) => {
        const userInfo = success.data.content;
        const defaultFields = fillUserFields(userInfo).defaultFields;
        const filledFields = fillUserFields(userInfo).filledFields;

        setUserInfo(userInfo);
        setDefaultFields(defaultFields);
        setFilledFields(filledFields);
      })
      .catch(() => {});
  }, [account]);

  useEffect(() => {
    getUserInfo();
  }, [account, getUserInfo]);

  return (
    <>
      {filledFields && (
        <div className="container mx-auto flex flex-wrap flex-col-reverse lg:grid grid-cols-2 gap-10 lg:gap-20 p-5 md:p-10">
          <UserEditPageInfoForm userInfo={userInfo} />

          <UserEditPageEditForm
            defaultFields={defaultFields}
            filledFields={filledFields}
            userPassword={userInfo.matKhau}
            onChange={(newFields) => {
              setDefaultFields(newFields);
            }}
            onSuccess={getUserInfo}
          />
        </div>
      )}
    </>
  );
}
