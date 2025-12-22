'use client';
import { Col, Container, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Heading from "./Heading";
import { Rating } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MultiItemCarouselProps {
  items?: React.ReactNode[];
}

const Consuntant: React.FC<MultiItemCarouselProps> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const [counsellorData, setCounsellorData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("/api/counsellor")
      .then((response) => setCounsellorData(response.data.data))
      .catch((error: any) => {
        const errorMessage = error.response
          ? error.response.data.message
          : error.message;
        toast.error(errorMessage);
      });
  }, []);

  return (
    <div className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={12} className="mb-4">
            <Heading title="career" name="counsellor" />
            <p className="text-secondary text-center small mb-0">
              Meet our experienced counsellors guiding students across India
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Slider {...settings}>
              {counsellorData.map((item, index) => (
                <div key={index} className="p-3">
                  <div
                    className="d-flex flex-column align-items-center justify-content-between bg-white border rounded-4 shadow-sm p-4 h-100"
                    style={{
                      transition: "0.3s",
                      minHeight: "380px", // 🔹 same height
                    }}
                  >
                    {/* Quote message */}
                    <p
                      className="text-secondary small mb-3 text-center"
                      style={{
                        textAlign: "justify",
                        lineHeight: "1.6",
                        flexGrow: 1,
                      }}
                    >
                      <span className="text-primary">
                        <FormatQuoteIcon fontSize="small" />
                      </span>
                      {item.message.length > 200
                        ? item.message.slice(0, 200) + "..."
                        : item.message}
                      <span className="text-primary">
                        <FormatQuoteIcon fontSize="small" />
                      </span>
                    </p>

                    {/* Rating */}
                    <Rating value={5} readOnly size="small" className="mb-3" />

                    {/* Profile Image (centered & larger) */}
                    <div className="d-flex flex-column align-items-center justify-content-center text-center">
                      <Image
                        src={item.imgUrl}
                        width={110}
                        height={110}
                        alt={item.name}
                        roundedCircle
                        className="border border-3 border-primary shadow-sm"
                      />
                      <h6 className="mt-3 mb-1 text-primary fw-semibold">
                        {item.name}
                      </h6>
                      <p className="text-muted small mb-0">
                        {item.experience} Years Experience
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Consuntant;
