import { TheaterSeat } from "../../Components/UtilComponents/TheaterSeat/TheaterSeat";

export const handleSeatClassification = (
  seat,
  seatNumber,
  selectedSeatList,
  handleSelectSeat
) => {
  const { tenGhe, maGhe } = seat;

  const normalSeat = "Thuong";
  const vipSeat = "Vip";
  const bookedSeat = seat.daDat;
  const selectedSeat = selectedSeatList.findIndex(
    (item) => item.maGhe === maGhe
  );

  if (!bookedSeat && selectedSeat === -1) {
    switch (seat.loaiGhe) {
      case normalSeat:
        return (
          <TheaterSeat key={tenGhe} seat="normal" onClick={handleSelectSeat}>
            {seatNumber}
          </TheaterSeat>
        );

      case vipSeat:
        return (
          <TheaterSeat key={tenGhe} seat="vip" onClick={handleSelectSeat}>
            {seatNumber}
          </TheaterSeat>
        );

      default:
        return (
          <TheaterSeat key={tenGhe} seat="normal">
            {seatNumber}
          </TheaterSeat>
        );
    }
  } else if (bookedSeat) {
    return (
      <TheaterSeat key={tenGhe} seat="booked">
        {seatNumber}
      </TheaterSeat>
    );
  } else if (selectedSeat !== -1) {
    return (
      <TheaterSeat key={tenGhe} seat="selected" onClick={handleSelectSeat}>
        {seatNumber}
      </TheaterSeat>
    );
  }
};
