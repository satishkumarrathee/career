"use client";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
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
    <Container fluid className="">
      <Row className="align-items-center">
        <Col xs={12} md={2} className="text-center bg-primary text-light py-1">
          <strong>Latest Update</strong>
        </Col>
        <Col xs={12} md={10} className="bg-primary py-1">
          <Slider {...settings}>
            {newsData.map((item, index) => (
              <div key={index} className="text-center">
                <Link href={item.link} target="_blank" className="text-light fw-light">
                  <p className="fs-6 mb-0">
                    {item.title}
                    <sup className="text-warning fw-bold mx-1" style={{ fontSize: "11px" }}>
                      New
                    </sup>
                  </p>
                </Link>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
