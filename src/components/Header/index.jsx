import React from "react";
import "./Header.scss";
import logoutImg from "../../assets/img/Logout.svg";

export const Header = () => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("http://localhost:3000/login")
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
