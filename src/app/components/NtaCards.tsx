'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

const NtaCards = () => {
  const router = useRouter();
  const [hoverIndex, setHoverIndex] = useState<number | null>(null) 

  const latestData = [
    "Inviting Online Application for National Entrance Test for Scheme for Residential Education for Students in High Classes in Targeted Areas [SHRESHTA (NETS)]-2026.",
    "Inviting Online Application for All India Sainik Schools Entrance Examination (AISSEE)-2026.",
    "Advisory and Instructions on Updation of Aadhaar Card/ UDID Card for UGC - NET December 2025 examination - reg.",
    "Notice regarding JEE Main Session 1 Application Form 2026.",
    "Notification for NEET (UG) 2026 Exam Date Announcement.",
    "Notification for NEET (UG) 2026 Exam Date Announcement.",
    "Notification for NEET (UG) 2026 Exam Date Announcement.",
    "Notification for NEET (UG) 2026 Exam Date Announcement.",
  ];

  return (
    <Container className="my-4">
      <Row className="g-4">
        {/* LEFT CARD */}
        <Col xs={12} md={6}>
          <Card className="custom-card border-top border-start border-2 border-primary shadow-custom rounded-3 position-relative">
            <div className="card-header-custom">About Career</div>
            <Card.Body className="p-4 d-flex flex-column justify-content-between" style={{ height: '100%' }}>
              <div>
                <Card.Text className="text-secondary mb-3">
                  Career Definer is a cutting-edge search engine designed for the new generation,
                  offering a comprehensive range of services from course selection to confirmation
                  of admission, all under one roof. Our mission is to redefine how individuals
                  navigate their career paths by providing advanced tools and support tailored
                  to the dynamic career market..
                </Card.Text>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <Button
                  className="fw-semibold px-4 d-flex align-items-center gap-2 nta-button"
                  onClick={() => router.push('/about')}
                >
                  READ MORE <FiArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* RIGHT CARD */}
        <Col xs={12} md={6}>
          <Card className="custom-card border-top border-start border-2 border-primary shadow-custom rounded-3 position-relative">
            <div className="card-header-custom">LATEST @ Job</div>
            <Card.Body className="p-4 d-flex flex-column justify-content-between" style={{ height: '100%' }}>
              <div className="scroll-container">
                <div className="scroll-inner">
                  {latestData.map((item, index) => (
                    <p key={index} className="d-flex align-items-start gap-2 mb-3">
                      <FiChevronRight size={18} className="text-primary mt-1" />
                      <span className="text-dark small">
                        {item}{" "}
                        <span
                          className="fw-semibold"
                          style={{
                            textDecoration: hoverIndex === index ? "underline" : "none",
                            color: hoverIndex === index ? "#2a56d4" : "#4e79ec",
                            transition: "0.3s",
                         cursor: "pointer"
                          }}
                          onMouseEnter={() => setHoverIndex(index)}
                          onMouseLeave={() => setHoverIndex(null)}
                        >
                          Read More
                        </span>
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <Button className="fw-semibold px-4 d-flex align-items-center gap-2 nta-button">
                  ARCHIVE <FiArrowRight />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NtaCards;
