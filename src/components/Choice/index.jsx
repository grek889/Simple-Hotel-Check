import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { useSelector, useDispatch } from "react-redux";
import { getHotels, addData } from "../../redux/actions/actionCreator";

import "./Choice.scss";

export const Choice = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [location, setLocation] = useState("Москва");
  const [dateCount, setDateCount] = useState(1);

  const info = useSelector((store) => store?.data?.dataLists[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    handleData()
    handleHotels()
    
  }, [])
  

  const handleHotels = () => {
    dispatch(getHotels());
  };

  const handleData = () => {
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC'
    };
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + Number(dateCount))
    const obj = {
      location: location,
      dateStart: startDate.toISOString().split("T")[0],
      dateEnd: endDate.toISOString().split("T")[0],
      dateCount: dateCount,
      dateRus: new Date(startDate).toLocaleString("ru", options).slice(0, -2)
    };
    dispatch(addData(obj));
  };

  return (
    <div className="container">
      <div className="container__form">
        <h4>Локация</h4>
        <input
          type="text"
          placeholder="Введите локацию"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="container__form">
        <h4>Дата заселения</h4>
        <DatePicker
          selected={startDate}
          locale={ru}
          dateFormat="dd.MM.yyyy"
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="container__form">
        <h4>Количество дней</h4>
        <input
          type="number"
          placeholder="1"
          min={1}
          value={dateCount}
          onChange={(e) => setDateCount(e.target.value)}
        />
      </div>
      <button className="btn" onClick={() =>{ handleData();   handleHotels()}}>
        Найти
      </button>
    </div>
  );
};
