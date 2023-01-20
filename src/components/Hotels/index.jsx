import React from "react";
import "./Hotels.scss";
import arrow from "../../assets/img/Arrow.svg";
import { useSelector } from "react-redux";
import AutoPlay from "./autoPlay";
import { Card } from "../Card";

export const Hotels = () => {
  const info = useSelector((store) => store?.data?.dataLists[0]);
  const favorite = useSelector((store) => store?.favorite?.favoriteLists);
  const hotels = useSelector((store) => store?.hotels?.hotelsList);
  // console.log(hotels);


  const createLabel = (number) => {
    const titles = ["отель", "отеля", "отелей"];
    const cases = [2, 0, 1, 1, 1, 2];
    return `${
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    }`;
  };
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
          <h4 className="hotels__content__favorite">{`Добавлено в Избранное: ${favorite.length} ${createLabel(favorite.length)}`}</h4>
        </div>
        <div className="hotels__content__list">
          <ul className="hotels__content__cards cards">
            {hotels.map((hotel,index) => (
              <Card
                hotel={hotel}
                houseVisible={true}
                key={index}
                date={info.dateRus}
                count={info.dateCount}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
