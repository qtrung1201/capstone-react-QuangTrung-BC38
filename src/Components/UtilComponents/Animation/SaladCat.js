import React from "react";
import Lottie from "lottie-react";
import saladCat from "../../../assets/animation/salad-cat.json";

export default function SaladCat() {
  return (
    <>
      <Lottie animationData={saladCat} loop={true} />
    </>
  );
}
