import { Collapse } from "antd";
import moment from "moment";
import React, { useMemo } from "react";
import styled from "styled-components";
import { convertSelectedSeatID } from "../../utils/renderSeatList/convertSelectedSeatID";

const { Panel } = Collapse;
const P = styled.p`
  color: ${(props) => props.theme.text.color01};
`;

export default function UserDetailPageTicketList({ userInfo }) {
  const ticketList = useMemo(
    () =>
      userInfo.thongTinDatVe.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <Collapse className="w-full">
              <Panel
                header={
                  <div>
                    <P>{item.tenPhim}</P>

                    <p className="text-xs text-gray-500">
                      {item.danhSachGhe[0].tenHeThongRap} (
                      {item.danhSachGhe[0].tenRap})
                    </p>

                    <p className="text-xs text-gray-500">
                      <b className="text-black">
                        {moment(item.ngayDat).format("hh:mm")}{" "}
                      </b>
                      {moment(item.ngayDat).format("(DD/MM/YYYY)")}
                    </p>
                  </div>
                }
                key={index}
                className="w-full"
              >
                <p className="w-full max-h-16 overflow-scroll">
                  <b>Ghế: </b>
                  {convertSelectedSeatID(item.danhSachGhe).join(", ")}
                </p>
              </Panel>
            </Collapse>
          </div>
        );
      }),
    [userInfo.thongTinDatVe]
  );

  return (
    <>
      {userInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
          {ticketList.length === 0 ? (
            <P className="text-lg">Tài khoản này chưa từng đặt vé.</P>
          ) : (
            ticketList
          )}
        </div>
      )}
    </>
  );
}
