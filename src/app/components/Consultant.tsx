'use client'
import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";
import { Rating } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MultiItemCarouselProps {
  items: React.ReactNode[]; // array of React nodes for carousel items
}

const Consuntant: React.FC<MultiItemCarouselProps> = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
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
    const [counsellorData, setCounsellorData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/api/counsellor")
      .then((response) => {
        setCounsellorData(response.data.data);
      })
      .catch((error: any) => {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        toast.error(errorMessage);
      });
  }, []);
    return (
    <>
        <Container>

            <Row>
                <Col md={12}>
                    <Heading title="career" name="counsellour" />
                </Col>
            </Row>

        </Container>
        <Container>

            <Row className="my-5">
            <Slider {...settings}>
                {
                  counsellorData && counsellorData.map((item)=>(
                        <Col md={4}  className="m-2">
                    <div className="border shadow p-4 m-2 h-100 bg-light d-flex rounded align-items-center flex-column ">
                        <div>
                            <p style={{ textAlign: "justify" }}>
                                <span className="text-primary"><FormatQuoteIcon /></span>{item.message}<span className="text-primary"><FormatQuoteIcon /></span>
                            </p>
                        </div>
                        <div>
                            <Rating value={5} readOnly />
                        </div>
                        <div className="my-3">
                            <Image src={item.imgUrl} width={150} height={150} alt={item.name}fluid roundedCircle />
                        </div>
                        <div>
                            <p className="text-primary fs-5">{item.name}</p>
                        </div>
                        <div>
                            <p className="text-secondary fs-6">{item.experience} Years</p>
                        </div>

                    </div>
                </Col>
                    ))
                }
                  </Slider>
            </Row>
        </Container>
    </>
    );
}

export default Consuntant;