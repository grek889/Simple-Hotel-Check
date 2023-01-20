import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import logoutImg from "../../assets/img/Logout.svg";

export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/")
  };
  return (
    <header>
      <div>
        <h2 className="name">Simple Hotel Check</h2>
      </div>
      <div className="logout-container" onClick={() => logout()}>
        <h4 className="logout">Выйти</h4>
        <img src={logoutImg} alt="logout" />
      </div>
    </header>
  );
};
