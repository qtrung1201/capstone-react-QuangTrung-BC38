import { Tabs } from "antd";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { renderTheaterTabs } from "../../utils/renderTheaterTabs/renderTheaterTabs";

export default function HomePageThearterTabs() {
  const { theaterData } = useSelector((state) => state.theaterReducer);

  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  const theaterTabs = useMemo(
    () => theaterData && renderTheaterTabs(theaterData, isMd),
    [theaterData, isMd]
  );

  return (
    <>
      <div className="container mx-auto px-3 pb-20">
        <div className="border-2">
          <Tabs tabPosition={isLg ? "left" : "top"} className="module">
            {theaterTabs}
          </Tabs>
        </div>
      </div>
    </>
  );
}
