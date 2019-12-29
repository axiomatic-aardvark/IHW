import React from "react";
import nextArr from "../images/gallery/next-arr.png";
import prevArr from "../images/gallery/prev-arr.png";

function PrevArr(props) {
  const { className, onClick } = props;
  return (
    <img
      src={prevArr}
      className={className}
      onClick={onClick}
      draggable="false"
      alt="prev-arrow"
    />
  );
}

function NextArr(props) {
  const { className, onClick } = props;
  return (
    <img
      src={nextArr}
      className={className}
      onClick={onClick}
      draggable="false"
      alt="next-arrow"
    />
  );
}

export default {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  prevArrow: <PrevArr />,
  nextArrow: <NextArr />
};
