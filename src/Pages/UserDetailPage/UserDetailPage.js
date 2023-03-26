import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import SpaceMail from "../../Components/UtilComponents/Animation/SpaceMail";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import { getUserInfo } from "../../redux/actions/userAction/getUserInfo";
import { userLocalStorage } from "../../services/user/user.localStorage";
import UserDetailPageTicketList from "./UserDetailPageTicketList";
import UserDetailPageUpdateForm from "./UserDetailPageUpdateForm";

const { Panel } = Collapse;
const Div = styled.div`
  min-height: calc(100vh - 64px);
  background-color: ${(props) => props.theme.background.color01};
  border-top: 1px solid ${(props) => props.theme.text.color01};
`;

export default function UserDetailPage() {
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();

  const getUserInfoSuccess = (success) => {
    setUserInfo(success.data.content);
  };

  useEffect(() => {
    const account = userLocalStorage.userInfo.get().taiKhoan;
    dispatch(setActivePage("/user-detail"));
    getUserInfo({ account, onSuccess: getUserInfoSuccess });
  }, [dispatch]);

  return (
    <>
      {userInfo && (
        <Div>
          <div className="container mx-auto flex justify-between items-start px-3">
            <div className="w-1/2 hidden lg:block">
              <div className="fixed top-1/5">
                <SpaceMail width={"35rem"} />
              </div>
            </div>

            <div className="w-1/2 flex-grow px-3 py-16">
              <Collapse>
                <Panel header="Cập nhật thông tin" key="1">
                  <UserDetailPageUpdateForm userInfo={userInfo} />
                </Panel>
                <Panel header="Thông tin đặt vé" key="2">
                  <UserDetailPageTicketList userInfo={userInfo} />
                </Panel>
              </Collapse>
            </div>
          </div>
        </Div>
      )}
    </>
  );
}
