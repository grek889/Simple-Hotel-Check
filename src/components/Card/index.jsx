import React from "react";
import house from "../../assets/img/House.svg";
import star from "../../assets/img/Star.svg";
import fullStar from "../../assets/img/FullStar.svg";
import "./Card.scss";

export const Card = ({ name, date, count, price,stars }) => {
  const createLabel = (number) => {
    const titles = ["День", "Дня", "Дней"];
    const cases = [2, 0, 1, 1, 1, 2];
    return `${
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    }`;
  };

  const starRender = (rating) => {
    const starList = [];

    for (let starCount = 0; starCount < 5; starCount++) {
      if (starCount < rating) {
        starList.push(fullStar)
      } else{
        starList.push(star)
      }
    }


    return starList.map((star) => <img src={star} alt="house" />)
  };

  return (
    <li className="card">
      <div className="card__main">
        <div className="card__img">
          <img src={house} alt="house" />
        </div>
        <div className="card__main-info">
          <h4 className="card__name">{name}</h4>
          <h5 className="card__date">{`${date} - ${count} ${createLabel(
            count
          )}`}</h5>
          <div className="card__stars">{starRender(stars)}</div>
          
        </div>
      </div>
      <div className="card__like-price">
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
            fill="white"
            stroke="#C4C4C4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="card__price">
          <h6>Price:</h6>
          <div>
            <h3>{Math.round(price)}</h3>
          </div>
        </div>
      </div>
    </li>
  );
};
