import React from "react";
import Lottie from "lottie-react";
import notFound from "../../../assets/animation/t-rex-404-page.json";

export default function TRex() {
  return (
    <>
      <div className="w-full">
        <Lottie animationData={notFound} loop={true} />
      </div>
    </>
  );
}
