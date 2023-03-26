import React from "react";
import { NavLink } from "react-router-dom";
import { StyledDarkButton } from "../../Components/StyledComponents/StyledButton";
import StyledSpan from "../../Components/StyledComponents/StyledSpan";
import LoginForm from "../../Components/UtilComponents/Form/LoginForm";

const SubmitButton = (
  <StyledDarkButton className="w-full mt-4" type="submit">
    Đăng nhập
  </StyledDarkButton>
);

export default function LoginPageLoginForm() {
  return (
    <>
      <LoginForm defaultFooter={false} editFooter={SubmitButton} />

      <div className="flex justify-center mt-5">
        <p>Chưa có tài khoản?</p>
        <NavLink to="/sign-up">
          <StyledSpan>Đăng ký</StyledSpan>
        </NavLink>
      </div>
    </>
  );
}
