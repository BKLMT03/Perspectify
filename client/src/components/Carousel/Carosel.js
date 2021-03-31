import { React, useState, useEffect } from "react";
import Col from "../Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Carosel.css";
import Carousel from "react-bootstrap/Carousel";
import {Link} from 'react-router-dom'

const Carosel = ({data, query, relatedOrTrending}) => {
  console.log(data)
  console.log(query)
  const reloadPage = () => {
    window.location.reload();
  }
  return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          <h2>{relatedOrTrending > 0 ? "More trending articles" : "Related articles"}</h2>
          <Carousel>
            {data.map((item) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block img-car"
                    src={item.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <p className="car">{item.title}</p>
                  </Carousel.Caption>
                  <button className='btn' type="onClick" href="/Discussion"
                  onClick={reloadPage}>
                  <Link className='nav-link'
                    // to='/Discussion'
                    to={{
                      pathname: "/Discussion",
                      state: {query: query,
                              url: item.url,
                              source: item.source.name}
                    }}>
                    Click to load this article ^
                  </Link>
                  </button>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
      </Container>
  );
};

export default Carosel;
