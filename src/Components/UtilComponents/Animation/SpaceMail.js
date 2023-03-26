import React from "react";
import Lottie from "lottie-react";
import spaceMail from "../../../assets/animation/space-mail.json";

export default function SpaceMail({ width }) {
  return (
    <>
      <div style={{ width }}>
        <Lottie animationData={spaceMail} loop={true} />
      </div>
    </>
  );
}
