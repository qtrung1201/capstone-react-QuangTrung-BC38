import React from "react";
import Lottie from "lottie-react";
import catLoader from "../../../assets/animation/cat-loader.json";
import { useSelector } from "react-redux";

export default function LoadingScreen() {
  const { isLoading } = useSelector((state) => state.layoutReducer);

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50"
        style={{
          display: isLoading ? "flex" : "none",
          backgroundColor: "rgb(0 0 0 / 70%)",
        }}
      >
        <div className="w-1/2">
          <Lottie animationData={catLoader} loop={true} />
        </div>
      </div>
    </>
  );
}
