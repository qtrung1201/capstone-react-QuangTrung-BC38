import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledDarkButton } from "../../Components/StyledComponents/StyledButton";
import { bookingSeat } from "../../redux/actions/bookingAction/bookingSeat";
import { convertISOString } from "../../utils/formatDate/convertISOString";
import { getDayOfWeek } from "../../utils/formatDate/getDayOfWeek";
import { openNotification } from "../../utils/openNotification/openNotification";
import { renderFormatedTicketSum } from "../../utils/renderFormatedTicketSum/renderFormatedTicketSum";
import { convertSelectedSeatID } from "../../utils/renderSeatList/convertSelectedSeatID";

const Div = styled.div`
  border-bottom-width: 2px;
  border-style: dashed;
`;

const B = styled.b`
  font-weight: 500;
`;

export default function BookingPageForm() {
  const { showtimeID } = useParams();
  const dispatch = useDispatch();

  const { cinemaRoomInfo, selectedSeatList } = useSelector(
    (state) => state.bookingReducer
  );
  const { userInfo } = useSelector((state) => state.userReducer);

  const { tenPhim, tenCumRap, diaChi, tenRap, ngayChieu, gioChieu } =
    cinemaRoomInfo.thongTinPhim;
  const { email, soDT } = userInfo;

  const showDate = () => {
    return ngayChieu && convertISOString["dd / mm / yyyy"](ngayChieu);
  };

  const handleBooking = () => {
    selectedSeatList.length > 0
      ? dispatch(bookingSeat(showtimeID, selectedSeatList))
      : openNotification({
          message: <p className="text-red-500 m-0">Vui lòng chọn vé.</p>,
        });
  };

  return (
    <>
      <div className="container mx-auto flex flex-col justify-between px-3 py-10 lg:p-6 xl:p-10 lg:border-t-2 lg:border-b-2">
        <div>
          <Div className="pb-6">
            <p className="mb-3 text-xl sm:text-2xl xl:text-3xl">
              {tenPhim.toUpperCase()}
            </p>
            <p className="font-medium">{tenCumRap}</p>
            <p className="text-xs text-gray-400">{diaChi}</p>
          </Div>

          <Div className="pt-6">
            <p className="mb-3">
              <B>{gioChieu}</B> ({getDayOfWeek(showDate())} {ngayChieu})
            </p>
            <p className="font-medium">{tenRap}</p>
            <p
              className="pb-6 sm:whitespace-nowrap"
              style={{ overflow: "overlay" }}
            >
              <B>Ghế: </B>
              {convertSelectedSeatID(selectedSeatList).join(", ")}
            </p>
          </Div>

          <Div className="py-6">
            <p>
              <B>Email: </B>
              {email}
            </p>
            <p>
              <B>Số điện thoại: </B>
              {soDT ? soDT : "Chưa cập nhật!"}
            </p>
          </Div>
        </div>

        <div className="pt-6">
          <p className="mb-3">
            <B>Tổng tiền: </B>
            {renderFormatedTicketSum(selectedSeatList)}
          </p>

          <StyledDarkButton className="w-full" onClick={handleBooking}>
            Thanh toán
          </StyledDarkButton>
        </div>
      </div>
    </>
  );
}
