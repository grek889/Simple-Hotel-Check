import React from "react";
import "./Hotels.scss";
import arrow from "../../assets/img/Arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import AutoPlay from "./autoPlay";
import { Card } from "../Card";

export const Hotels = () => {
  const info = useSelector((store) => store?.data?.dataLists[0]);   
  const hotels = useSelector((store) => store?.hotels?.hotelsList);
  console.log(hotels);   
  return (
    <div className="container hotels">
      <div className="hotels__head">
        <div className="hotels__naming">
          <h2 className="hotels__name">Отели</h2>
          <img src={arrow} alt="arrow" className="hotels__img" />
          <h2 className="hotels__name">{info.location}</h2>
        </div>
        <h3 className="hotels__date">{info.dateRus}</h3>
      </div>
      <AutoPlay />
      <div className="hotels__content">
        <div>
          <h4 className="hotels__content__favorite">{`Добавлено в Избранное: 3 отеля`}</h4>
        </div>
        <div className="hotels__content__list">
            <ul className="hotels__content__cards">
                {hotels.map((hotel) => <Card key={hotel.hotelId} name={hotel.hotelName} date={info.dateRus} count={info.dateCount} price={hotel.priceFrom} stars={hotel.stars}/>)}
            </ul>
        </div>
      </div>
    </div>
  );
};
