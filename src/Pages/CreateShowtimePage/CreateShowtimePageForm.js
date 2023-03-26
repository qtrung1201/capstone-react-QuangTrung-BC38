import { Button, DatePicker, Form, InputNumber, Select } from "antd";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getTheaterChainInfo } from "../../redux/actions/theaterAction/getTheaterChainInfo";
import { getTheaterInfo } from "../../redux/actions/theaterAction/getTheaterInfo";
import { PlusCircleOutlined } from "@ant-design/icons";
import { createNewShowtime } from "../../redux/actions/movieAction/createNewShowtime";

export default function CreateShowtimePageForm({
  movieShowtime,
  handleGetMovieShowtime,
}) {
  const [theaterChain, setTheaterChain] = useState();
  const [theater, setTheater] = useState();

  const handleGetTheaterInfo = (theaterChainID) => {
    getTheaterInfo({
      theaterChainID,
      onSuccess: getTheaterInfoSuccess,
    });
  };

  const getTheaterInfoSuccess = (success) => {
    setTheater(success.data.content);
  };

  const getTheaterChainInfoSuccess = (success) => {
    const theaterChainList = success.data.content;
    setTheaterChain(theaterChainList);
    handleGetTheaterInfo(theaterChainList[0].maHeThongRap);
  };

  useEffect(() => {
    getTheaterChainInfo(getTheaterChainInfoSuccess);
    // eslint-disable-next-line
  }, []);

  const handleTheaterChainChange = (value) => {
    handleGetTheaterInfo(value);
  };

  const TheaterChainOption = useMemo(
    () =>
      theaterChain &&
      theaterChain.map((item) => (
        <Select.Option key={item.maHeThongRap}>
          {item.tenHeThongRap}
        </Select.Option>
      )),
    [theaterChain]
  );

  const TheaterOption = useMemo(
    () =>
      theater &&
      theater.map((item) => (
        <Select.Option key={item.maCumRap}>{item.tenCumRap}</Select.Option>
      )),
    [theater]
  );

  const { movieID } = useParams();

  const onFinish = (value) => {
    const { theater, date, price } = value;
    const formatedDate = moment(date).format("DD/MM/YYYY hh:mm:ss");

    const showtimeInfo = {
      maPhim: movieID * 1,
      ngayChieuGioChieu: formatedDate,
      maRap: theater,
      giaVe: Math.round(price) * 1000,
    };

    createNewShowtime({ showtimeInfo, onSuccess: handleGetMovieShowtime });
  };

  return (
    <>
      {theater && (
        <>
          <Form
            layout="vertical"
            requiredMark={false}
            autoComplete="off"
            onFinish={onFinish}
            initialValues={{
              theaterChain: theaterChain[0].maHeThongRap,
              price: 75,
            }}
            fields={[
              {
                name: "theater",
                value: theater[0].maCumRap,
              },
            ]}
          >
            <p className="mb-3 text-2xl text-blue-500">
              <b className="font-medium text-black">Phim: </b>
              {movieShowtime.tenPhim}
            </p>

            <Form.Item label="Hệ thống rạp:" name="theaterChain">
              <Select onChange={handleTheaterChainChange}>
                {TheaterChainOption}
              </Select>
            </Form.Item>

            <Form.Item label="Rạp chiếu:" name="theater">
              <Select>{TheaterOption}</Select>
            </Form.Item>

            <Form.Item
              label="Lịch chiếu:"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Vui lòng chọn lịch chiếu!",
                },
              ]}
            >
              <DatePicker showTime format="DD/MM/YYYY hh:mm" />
            </Form.Item>

            <Form.Item
              label="Giá vé:"
              name="price"
              tooltip="Giá vé tối thiểu là 75.000 và tối đa là 150.000"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập giá vé!",
                },
              ]}
            >
              <InputNumber min={75} max={150} addonAfter={"nghìn đồng"} />
            </Form.Item>

            <Form.Item>
              <Button
                className="flex items-center mr-2"
                type="dash"
                shape="round"
                icon={<PlusCircleOutlined />}
                htmlType="submit"
              >
                Tạo lịch chiếu
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </>
  );
}
