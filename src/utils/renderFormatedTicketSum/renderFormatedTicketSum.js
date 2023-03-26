export const renderFormatedTicketSum = (selectedSeatList) => {
  const ticketPrice = selectedSeatList.map((item) => item.giaVe);
  const ticketSum = ticketPrice.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "VND",
  }).format(ticketSum);
};
