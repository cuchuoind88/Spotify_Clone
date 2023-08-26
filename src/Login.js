import React from "react";
import "./Login.css";
import Logo from "./Logo";
import { loginUrl } from "./spotify";
export default function Login() {
  return (
    <div className="login">
      <Logo />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
