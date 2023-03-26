import React from "react";
import Lottie from "lottie-react";
import walkingAvocado from "../../../assets/animation/walking-avocado.json";
import { useMediaQuery } from "react-responsive";

export default function AdminMinScreenAlert() {
  const isMd = useMediaQuery({ query: "(max-width: 768px)" });
  const isXs = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-start items-center bg-white z-50"
        style={{
          display: isMd ? "flex" : "none",
        }}
      >
        <div className="w-full sm:w-2/3">
          <Lottie animationData={walkingAvocado} loop={true} />
        </div>

        <p
          className="w-full px-5 text-center text-2xl sm:text-4xl"
          style={{ fontSize: isXs ? "1rem" : "" }}
        >
          Trang quản lý chưa hỗ trợ người dùng trên kích cỡ màn hình này hoặc
          nhỏ hơn.
        </p>
      </div>
    </>
  );
}
