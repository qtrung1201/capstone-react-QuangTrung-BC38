import React from "react";
import { Progress } from "antd";

export default function ProgressCircle({ rate, multiplier }) {
  return (
    <>
      <Progress
        type="circle"
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={rate * multiplier}
        format={(percent) => `${percent / 10}`}
      />
    </>
  );
}
