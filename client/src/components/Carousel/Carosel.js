import {React, useState, useEffect} from "react";
import Col from "../Col";
import Row from "../Row";
import "./Carosel.css";
import Carousel from "react-bootstrap/Carousel";
import Pic1 from "../Carousel/pic1.jpg"
import Pic2 from "../Carousel/pic2.jpeg"
import Pic3 from "../Carousel/pic3.jpg"

const Carosel = ({data}) => {

  // const [articleData, setArticleData] = useState([])
  // useEffect(() => {
  //   setCarouselData(data)
  // }, [])


  return (
    <div>
        <h2>Related Articles</h2>
        
      <Carousel>
      {data.map((item) => {
        return(
        <Carousel.Item className='box'>
        <img
          className="d-block w-100 img"
          src={item.urlToImage}
          alt="First slide"
      
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      )})}
      </Carousel>
    </div>
  );
}

export default Carosel;
