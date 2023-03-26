import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCinemaRoomInfo } from "../../redux/actions/bookingAction/getCinemaRoomInfo";
import { setActivePage } from "../../redux/actions/layoutAction/setActivePage";
import { openNotification } from "../../utils/openNotification/openNotification";
import BookingPageForm from "./BookingPageForm";
import BookingPageTheater from "./BookingPageTheater";

const Div = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.isLg ? "70vw 30vw" : "1fr")};
`;

export default function BookingPage() {
  const dispatch = useDispatch();
  const { showtimeID } = useParams();
  const { userInfo } = useSelector((state) => state.userReducer);
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    dispatch(setActivePage(`/booking/${showtimeID}`));
    userInfo && dispatch(getCinemaRoomInfo(showtimeID));
  }, [dispatch, showtimeID, userInfo]);

  useEffect(() => {
    if (!userInfo) {
      openNotification({
        message: (
          <p className="text-blue-500 m-0">
            Cần đăng nhập để vào trang đặt vé.
          </p>
        ),
      });
    }
  }, [userInfo]);

  return (
    <>
      {userInfo ? (
        <>
          <Div isLg={isLg}>
            <BookingPageTheater isLg={isLg} />
            <BookingPageForm />
          </Div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
