import { Select, Tag } from "antd";
import moment from "moment";
import React, { Fragment, useMemo, useState } from "react";

export default function CreateShowtimePageShowtimeList({ movieShowtime }) {
  const { heThongRapChieu } = movieShowtime;

  const [theaterChain, setTheaterChain] = useState(heThongRapChieu[0]);
  const [theater, setTheater] = useState(theaterChain.cumRapChieu[0]);

  const handleTheaterChainChange = (value) => {
    const index = heThongRapChieu.findIndex(
      (item) => item.maHeThongRap === value
    );
    setTheaterChain(heThongRapChieu[index]);
    setTheater(heThongRapChieu[index].cumRapChieu[0]);
  };

  const handleTheaterChange = (value) => {
    const index = theaterChain.cumRapChieu.findIndex(
      (item) => item.maCumRap === value
    );
    setTheater(theaterChain.cumRapChieu[index]);
  };

  const TheaterChainOptionList = useMemo(
    () =>
      heThongRapChieu.map((item) => (
        <Select.Option key={item.maHeThongRap}>
          {item.maHeThongRap}
        </Select.Option>
      )),
    [heThongRapChieu]
  );

  const TheaterOptionList = useMemo(
    () =>
      theaterChain.cumRapChieu.map((item) => (
        <Select.Option key={item.maCumRap}>{item.tenCumRap}</Select.Option>
      )),
    [theaterChain]
  );

  const ShowtimeList = useMemo(() => {
    let previousDate = "";

    return theater.lichChieuPhim.map((item) => {
      const showtimeTag = (
        <Tag key={item.maLichChieu}>
          {moment(item.ngayChieuGioChieu).format("hh:mm")}
        </Tag>
      );
      const date = moment(item.ngayChieuGioChieu).format("DD/MM/YYYY");

      if (previousDate !== date) {
        previousDate = date;
        return (
          <Fragment key={item.maLichChieu}>
            <p className="w-full mt-6 mb-2">
              {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")}
            </p>
            {showtimeTag}
          </Fragment>
        );
      } else {
        return showtimeTag;
      }
    });
  }, [theater]);

  return (
    <>
      <div>
        <Select
          style={{
            width: 120,
            marginRight: "1rem",
          }}
          defaultValue={heThongRapChieu[0].maHeThongRap}
          onChange={handleTheaterChainChange}
        >
          {TheaterChainOptionList}
        </Select>
        <Select
          style={{
            width: "max-content",
          }}
          value={theater.maCumRap}
          onChange={handleTheaterChange}
        >
          {TheaterOptionList}
        </Select>

        <div className="container mx-auto">{ShowtimeList}</div>
      </div>
    </>
  );
}
