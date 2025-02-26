'use client'
import UniversityData from '@/app/utils/university.json';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Image, Row } from 'react-bootstrap';


const University= () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Container className='mb-5'>
      <Row>
        <Col>
          <Slider {...settings}>
            {UniversityData.map((item) => (
              <div className="border shadow rounded mx-2 h-100" key={item.name}>
                <div className='d-flex align-content-center mx-1 justify-content-center'> 
                  <Image src={`/logo/${item.name}.jpg`} alt={item.name} width={160} height={85} />
                </div>
                <div>
                  <p className="text-center fw-light" style={{ fontSize: '11px' }}>{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default University;
