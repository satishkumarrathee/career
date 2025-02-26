"use client";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Slider from 'react-slick';

const News = () => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    horizontal:true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000,
  };

  useEffect(() => {
    axios
      .get("/api/news")
      .then((response) => {
        setNewsData(response.data.data);
      })
      .catch((error: any) => {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        toast.error(errorMessage);
      });
  }, []);
  return (
    <Container>
      <Row>
      <Col md={2} className="m-0" id="newsData">
        <div className="d-flex fs-5 text-light  align-items-center justify-content-center border pt-2 m-0 bg-primary text-light">
          <p>Latest Update</p>
        </div>
      </Col>
        <Col md={10} className=" bg-primary m-0">
          <Slider {...settings}>
          

          
            {newsData.map((item) => (
                <div className="pt-2">
              <Link href={item.link} className="text-light fw-light" target="_blank"><p className="text-center fs-5 text-light ps-3">{item.title}<sup className="text-light fw-bold mx-1" style={{fontSize:'11px'}}>New</sup></p> </Link></div>
            ))}
            
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
