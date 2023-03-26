import { Tabs } from "antd";
import styled from "styled-components";
import { rendTheaterMovie } from "./renderTheaterMovie";
const { TabPane } = Tabs;

const P = styled.p`
  color: ${(props) => props.theme.text.color01};
`;

const tabPaneContent = (theater) => (
  <div className="w-40 sm:w-80 text-left whitespace-normal">
    <P>{theater.tenCumRap}</P>
    <p className="text-gray-500"> {theater.diaChi}</p>
  </div>
);

export const renderTheaterList = (theaterData) => {
  return theaterData.lstCumRap.map((theater) => {
    return (
      <TabPane
        tab={tabPaneContent(theater)}
        key={theater.maCumRap}
        className="py-5 overflow-scroll"
        style={{ height: 564 }}
      >
        {rendTheaterMovie(theater)}
      </TabPane>
    );
  });
};
