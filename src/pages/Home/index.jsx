import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Choice } from "../../components/Choice";
import { Favorite } from "../../components/Favorite";
import { Header } from "../../components/Header";
import { Hotels } from "../../components/Hotels";

import "./Home.scss"


export const Home = () => {
  const info = useSelector((store) => store?.data?.dataLists[0]);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="content">
        <div>
          <Choice/>
          <Favorite/>
        </div>
        {info ? <Hotels/> : "Загрузка..."}
        {/* <Hotels/> */}
      </div>
    </>
  );
};
