import React from "react";
import "./Hotels.scss";
import arrow from "../../assets/img/Arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import AutoPlay from "./autoPlay";



export const Hotels = () => {
  const info = useSelector((store) => store?.data?.dataLists[0]);
  return (
    <div className="container hotels">
      <div className="hotels__head">
        <div className="hotels__naming">
          <h2 className="hotels__name">Отели</h2>
          <img src={arrow} alt="arrow" className="hotels__img" />
          <h2 className="hotels__name">{info.location}</h2>
        </div>
        <h3 className="hotels__date">{info.dateStart}</h3>
      </div>
      <AutoPlay/>
    </div>
  );
};
