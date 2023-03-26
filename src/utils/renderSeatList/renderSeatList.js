import { Fragment } from "react";
import styled from "styled-components";
import { handleSeatClassification } from "./handleSeatClassification";

const P = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  font-size: 1.5vw;

  @media (min-width: 1024px) {
    font-size: 1vw;
  }
`;

export const renderSeatList = (
  seatList,
  selectedSeatList,
  handleSelectSeat
) => {
  let alpha = 65;
  let seatNumber = 0;
  const lastSeatOfRow = 16;

  return seatList.map((item, index) => {
    const row = String.fromCharCode(alpha);
    seatNumber++;

    if (
      // middle seat
      (item.tenGhe * 1) % lastSeatOfRow !== 0 &&
      index !== 0 &&
      index !== seatList.length - 1
    ) {
      return handleSeatClassification(
        item,
        seatNumber,
        selectedSeatList,
        () => {
          handleSelectSeat(item);
        }
      );
    } else if (
      // last seat of row
      (item.tenGhe * 1) % lastSeatOfRow === 0 &&
      index !== seatList.length - 1
    ) {
      seatNumber = 0;
      return (
        <Fragment key={item.tenGhe}>
          {handleSeatClassification(
            item,
            lastSeatOfRow,
            selectedSeatList,
            () => {
              handleSelectSeat(item);
            }
          )}
          <P>{row}</P>
          <P>{alpha++ && String.fromCharCode(alpha)}</P>
        </Fragment>
      );
    } else if (
      // first seat of list
      index === 0
    ) {
      return (
        <Fragment key={item.tenGhe}>
          <P>{row}</P>
          {handleSeatClassification(item, seatNumber, selectedSeatList, () => {
            handleSelectSeat(item);
          })}
        </Fragment>
      );
    } else {
      // last seat of list
      return (
        <Fragment key={item.tenGhe}>
          {handleSeatClassification(item, seatNumber, selectedSeatList, () => {
            handleSelectSeat(item);
          })}
          <P>{row}</P>
        </Fragment>
      );
    }
  });
};
