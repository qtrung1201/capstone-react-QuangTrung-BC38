import React from "react";
import { NavLink } from "react-router-dom";
import TRex from "../../Components/UtilComponents/Animation/T-Rex";
import NotFoundPageContent from "./NotFoundPageContent";

export default function NotFoundPage() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-between items-center">
        <NavLink to="/" className="w-full md:w-3/5">
          <TRex />
        </NavLink>

        <div className="flex-grow">
          <NotFoundPageContent />
        </div>
      </div>
    </>
  );
}
