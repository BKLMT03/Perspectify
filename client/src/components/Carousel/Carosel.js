import React from "react";
import Col from "../Col";
import Row from "../Row";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../Carousel/pic1.jpg"
import Pic2 from "../Carousel/pic2.jpeg"
import Pic3 from "../Carousel/pic3.jpg"

function Carosel() {
  return (
    <div>
        <h2>Related Articles</h2>
      <Carousel>
        <Carousel.Item className='box'>
          <img
            className="d-block w-100 img"
            src={Pic1}
            alt="First slide"
        
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Pic3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carosel;
