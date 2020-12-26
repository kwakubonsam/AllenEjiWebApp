import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../Logos/rn.jpeg";
import internImage from "../Logos/rn3.jpeg";
import anotherIntern from "../Logos/rn2.jpeg";
export const Images = () => {
  return (
    <Carousel style={{ paddingTop: "3.7em" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={firstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={internImage} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={anotherIntern} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
