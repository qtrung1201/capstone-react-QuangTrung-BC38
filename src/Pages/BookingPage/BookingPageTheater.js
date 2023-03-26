import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TheaterScreen } from "../../Components/UtilComponents/TheaterScreen/TheaterScreen";
import { SeatContainer } from "../../Components/UtilComponents/TheaterSeat/SeatContainer";
import { TheaterSeat } from "../../Components/UtilComponents/TheaterSeat/TheaterSeat";
import { selectSeat } from "../../redux/actions/bookingAction/selectSeat";
import { renderSeatList } from "../../utils/renderSeatList/renderSeatList";

const Div = styled.div`
  width: 100vw;
  padding: 4.5vw 0;
  background-color: ${(props) => props.theme.background.color01};
  border-top-width: 2px;
  border-bottom-width: 2px;

  @media (min-width: 1024px) {
    width: 70vw;
  }
`;

const SeatCaptionDiv = styled.div`
  width: 2.75vw;
  margin-right: 1.25vw;
  margin-top: 1.25vw;
  transform: scale(0.8);

  @media (min-width: 1024px) {
    width: 1.75vw;
    transform: scale(1);
  }
`;

export default function BookingPageTheater({ isLg }) {
  const { cinemaRoomInfo, selectedSeatList } = useSelector(
    (state) => state.bookingReducer
  );

  const dispatch = useDispatch();

  const handleSelectSeat = (seat) => {
    dispatch(selectSeat(seat));
  };

  const renderSeat =
    cinemaRoomInfo &&
    renderSeatList(
      cinemaRoomInfo.danhSachGhe,
      selectedSeatList,
      handleSelectSeat
    );

  return (
    <>
      <Div className="flex flex-wrap">
        <div className="flex flex-col">
          <TheaterScreen className="text-xl" before={""} />

          <SeatContainer>{renderSeat}</SeatContainer>
        </div>
        <div className="flex flex-col flex-grow justify-end">
          <SeatCaptionDiv>
            <TheaterSeat seat="normal" before={": Ghế thường"} />
          </SeatCaptionDiv>

          <SeatCaptionDiv>
            <TheaterSeat seat="vip" before={": Ghế VIP"} />
          </SeatCaptionDiv>

          <SeatCaptionDiv>
            <TheaterSeat seat="booked" before={": Ghế đã được đặt"} />
          </SeatCaptionDiv>

          <SeatCaptionDiv
            style={{ transform: isLg ? "scale(0.83)" : "scale(0.664)" }}
          >
            <TheaterSeat seat="selected" before={": Ghế bạn đang chọn"} />
          </SeatCaptionDiv>
        </div>
      </Div>
    </>
  );
}
