import React, { useCallback, useState } from "react";
import AddNewUserPageAddForm from "./AddNewUserPageAddForm";
import AddNewUserPageInfoForm from "./AddNewUserPageInfoForm";

export default function AddNewUserPage() {
  const [userInfo, setUserInfo] = useState();

  const getUserInfo = useCallback((userData) => {
    setUserInfo(userData);
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-wrap flex-col-reverse lg:grid grid-cols-2 gap-10 lg:gap-20 p-5 md:p-10">
        {userInfo && <AddNewUserPageInfoForm userInfo={userInfo} />}
        <AddNewUserPageAddForm getUserInfo={getUserInfo} />
      </div>
    </>
  );
}
