import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/img/Img1.svg";
import Img2 from "../../assets/img/Img2.svg";
import Img3 from "../../assets/img/Img3.svg";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
          <div>
            <img src={Img3} alt="" />
          </div>
          <div>
            <img src={Img1} alt="" />
          </div>
          <div>
            <img src={Img2} alt="" />
          </div>
          <div>
            <img src={Img3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
