import React from "react";
import SpaceMail from "../../Components/UtilComponents/Animation/SpaceMail";
import SignUpPageSignUpForm from "./SignUpPageSignUpForm";

export default function SignUpPage() {
  return (
    <>
      <div className="container mx-auto flex justify-center items-start px-3">
        <div className="w-0 sm:w-1/2">
          <SpaceMail width={"100%"} />
        </div>

        <div className="w-3/4 sm:w-1/2 mt-10 sm:px-8 md:px-16 lg:px-32">
          <SignUpPageSignUpForm />
        </div>
      </div>
    </>
  );
}
