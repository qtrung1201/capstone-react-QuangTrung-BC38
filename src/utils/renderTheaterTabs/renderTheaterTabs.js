import { Tabs } from "antd";
import { renderTheaterList } from "./renderTheaterList";
const { TabPane } = Tabs;

export const renderTheaterTabs = (theaterData, isMd) => {
  return theaterData.map((theaterChain) => {
    return (
      <TabPane
        tab={<img className="w-16" src={theaterChain.logo} alt="..." />}
        key={theaterChain.maHeThongRap}
        className="module"
      >
        <Tabs
          tabPosition={isMd ? "left" : "top"}
          style={{
            height: isMd ? 564 : "100%",
          }}
          key={theaterChain.maHeThongRap}
        >
          {renderTheaterList(theaterChain)}
        </Tabs>
      </TabPane>
    );
  });
};
