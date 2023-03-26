import React from "react";
import Lottie from "lottie-react";
import saladCat from "../../../assets/animation/salad-cat.json";
import { useMediaQuery } from "react-responsive";

export default function UserMinScreenAlert() {
  const isXs = useMediaQuery({ query: "(max-width: 320px)" });

  return (
    <>
      <div
        className="w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-black z-50"
        style={{
          display: isXs ? "flex" : "none",
        }}
      >
        <div className="w-full">
          <Lottie animationData={saladCat} loop={true} />
        </div>

        <p className="w-full px-5 text-white" style={{ fontSize: "7vw" }}>
          Rất tiếc!
          <br />
          Hiện Tetris chưa hỗ trợ người dùng trên kích cỡ màn hình này hoặc nhỏ
          hơn.
        </p>
      </div>
    </>
  );
}
