import { React, useState, useEffect } from "react";
import Col from "../Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Carosel.css";
import Carousel from "react-bootstrap/Carousel";
import {Link} from 'react-router-dom'

const Carosel = ({data, query}) => {
  console.log(data)
  console.log(query)
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
                    <p className="car">{item.title}</p>
                  </Carousel.Caption>
                  <button className='btn' type="onClick" href="/Discussion">
                  <Link className='nav-link'
                    // to='/Discussion'
                    to={{
                      pathname: "/Discussion",
                      state: {query: query,
                              url: item.url}
                    }}>
                  View Article</Link>
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
