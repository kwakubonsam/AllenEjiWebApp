import React from "react";
import Carousel from "react-bootstrap/Carousel";
import firstImage from "../Logos/rn.jpeg";
import internImage from "../Logos/rn3.jpeg";
import anotherIntern from "../Logos/rn2.jpeg";
import labwork from "../Logos/EJIDD.png";
import team from "../Logos/Ejimembers.png";
import intern from "../Logos/FirtsTempImage.jpg"


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
        <Carousel.Caption>Image Caption</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export const GalleryImages = () => {
  return (
    <Carousel style={{ paddingTop: "3.7em" }}>
      <Carousel.Item>
        <img className="d-block w-100" src={intern} alt="Third slide" />
        <Carousel.Caption>
        <h3>First Image</h3>
        <p>Description goes here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={anotherIntern} alt="Third slide" />
        <Carousel.Caption>
        <h3>Second Image</h3>
        <p>Description goes here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={internImage} alt="Third slide" />
        <Carousel.Caption>
        <h3>Third Image</h3>
        <p>Description goes here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width: "100%",height: "200%"}}className="h-100 d-block w-100" src={team} alt="Third slide" />
        <Carousel.Caption>
        <h3>Fourth Image</h3>
        <p>Description goes here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={firstImage} alt="Third slide" />
        <Carousel.Caption>
        <h3>Fifth Image</h3>
        <p>Description goes here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={labwork} alt="Third slide" />
        <Carousel.Caption>
        <h3>Sixth Image</h3>
        <p>Description goes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
