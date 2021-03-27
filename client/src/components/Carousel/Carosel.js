import { React, useState, useEffect } from "react";
import Col from "../Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Carosel.css";
import Carousel from "react-bootstrap/Carousel";

const Carosel = ({ data }) => {
  // const [articleData, setArticleData] = useState([])
  // useEffect(() => {
  //   setCarouselData(data)
  // }, [])

  return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <h2>Related Articles</h2>
          <Carousel>
            {data.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={item.urlToImage}
                    alt="First slide"
                    style={{ height: "300px" }}
                  />
                  <Carousel.Caption>
                    <p>{item.title}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
      </Container>
  );
};

export default Carosel;
