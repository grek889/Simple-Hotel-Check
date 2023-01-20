import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card";
import "./Favorite.scss";
import up from "../../assets/img/Up.svg";
import down from "../../assets/img/Down.svg";
import upActive from "../../assets/img/UpActive.svg";
import downActive from "../../assets/img/DownActive.svg";

export const Favorite = () => {
  const [active, setActive] = useState("rating");
  const [activeUp, setActiveUp] = useState(false);
  const favorite = useSelector((store) => store?.favorite?.favoriteLists);
  const [favoriteClone, setFavoriteClone] = useState(favorite.slice(0))

  console.log(favoriteClone);

  useEffect(() => {
    setFavoriteClone(favorite.slice(0))
  }, [favorite])
  

  const sortFavoriteByRating = () => {
    const date = favorite.slice(0)
    if(activeUp){
      date.sort((a, b) => a.stars < b.stars ? 1 : -1);
      setFavoriteClone(date)
    } else{
      date.sort((a, b) => a.stars > b.stars ? 1 : -1);
      setFavoriteClone(date)
    }
  }
  const sortFavoriteByPrice = () => {
    const date = favorite.slice(0)
    if(activeUp){
      date.sort((a, b) => a.priceFrom < b.priceFrom ? 1 : -1);
      setFavoriteClone(date)
    } else{
      date.sort((a, b) => a.priceFrom > b.priceFrom ? 1 : -1);
      setFavoriteClone(date)
    }
  }
  return (
    <div className="container favorite">
      <h2 className="name">Избранное</h2>
      <div className="favorite__buttons">
        <div
          onClick={() => {setActive("rating"); setActiveUp(e => !e); sortFavoriteByRating()}}
          className={
            active === "rating" ? "favorite__button active" : "favorite__button"
          }
        >
          <h6>Рейтинг</h6>
          <div className="favorite__button__img">
            {active === "rating" && activeUp ? <img src={upActive} alt="up" /> : <img src={up} alt="up" />}
            {active === "rating" && !activeUp ? <img src={downActive} alt="up" /> : <img src={down} alt="down"/>}
          </div>
        </div>
        <div
          onClick={() => {setActive("price");setActiveUp(e => !e); sortFavoriteByPrice()}}
          className={
            active === "price" ? "favorite__button active" : "favorite__button"
          }
        >
          <h6>Цена</h6>
          <div className="favorite__button__img">
          {active === "price" && activeUp ? <img src={upActive} alt="up" /> : <img src={up} alt="up" />}
            {active === "price" && !activeUp ? <img src={downActive} alt="up" /> : <img src={down} alt="down"/>}
          </div>
        </div>
      </div>
      <div>
        <ul className="cards">
          {favoriteClone.map((hotel, index) => (
            <Card
              hotel={hotel}
              houseVisible={false}
              key={index}
              date={hotel.date}
              count={hotel.count}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
