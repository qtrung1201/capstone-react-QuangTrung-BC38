export const convertSelectedSeatID = (seatList) => {
  let alpha = 65;
  const newSeatList = seatList.map((item) => item.tenGhe);
  const sortedNewSeatList = newSeatList.sort((a, b) => a - b);

  return sortedNewSeatList.map((item) => {
    let row = Math.floor(item / 16);
    let seatNumber = (item / 16 - row) * 16;

    if (seatNumber < 10 && seatNumber !== 0) {
      seatNumber = "0" + seatNumber;
    } else if (seatNumber === 0) {
      seatNumber = 16;
      row = row - 1;
    }

    return String.fromCharCode(alpha + row) + "-" + seatNumber;
  });
};
