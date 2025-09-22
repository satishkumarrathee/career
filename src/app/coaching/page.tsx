import { Col, Container, Image, Row } from "react-bootstrap";
import CoachingData from "@/app/utils/coaching.json";
import Link from "next/link";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GoogleIcon from "@mui/icons-material/Google";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Heading from "@/app/components/Heading";
import  TruncateText  from "@/app/components/Truncate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaching & Training Services | CareerDefiner — Chandigarh, Mohali & Panchkula",
  description:
    "Discover top coaching institutes & expert mentors with CareerDefiner. Trusted by over 50,000 students in Chandigarh, Mohali & Panchkula for career growth and success.",
  keywords: [
    "coaching institutes",
    "mentors",
    "career coaching",
    "training",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "CareerDefiner"
  ],
  openGraph: {
    title: "Coaching & Training Services | CareerDefiner — Chandigarh, Mohali & Panchkula",
    description:
      "Discover top coaching institutes & expert mentors with CareerDefiner. Trusted by over 50,000 students in Chandigarh, Mohali & Panchkula for career growth and success.",
    url: "https://careerdefiner.com/coaching",
    siteName: "CareerDefiner",
    locale: "en_IN",
    type: "article",
  },
};

const Coaching = () => {
  return (
    <>
      <div id="coaching">
        <Container>
          <Row>
            <Col md={2}>
              <div className="my-3 text-light">
                <div>
                  <p style={{ fontSize: "40px" }}>COACHING</p>
                </div>
                <hr />
                <div>
                  <p className="fs-6 my-2 fw-light text-light fw-bold">
                    HOME / COACHING
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col md={12} className="mt-5">
              <Heading title="FIND" name="COACHING INSTITUTE" />
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            {CoachingData.map((item) => (
              <Col md={3}>
                <div className="border p-3 my-3 text-center  bg-body rounded">
                  <div>
                    <Link href={`/coaching/${item.id}`}>
                      {" "}
                      <Image
                        src={`/coaching/${item.name}.jpg`}
                        alt={item.name}
                        fluid
                      />
                    </Link>
                  </div>
                  <hr />
                  <Link href={`/coaching/${item.id}`}>
                    <p style={{ fontSize: "14px" }}>
                    <TruncateText itemName={item.name}/> 
                    </p>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="d-flex border p-3 my-3 bg-light rounded">
                <div className="mx-3 text-primary">
                  <AdminPanelSettingsIcon style={{ fontSize: "50px" }} />
                </div>
                <div>
                  <h2 className="fw-bold">50,000+</h2>
                  <h4 className="fw-light">Trusted By Students</h4>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex border p-3 my-3 bg-light rounded">
                <div className="mx-3 text-primary">
                  <SupportAgentIcon style={{ fontSize: "50px" }} />
                </div>
                <div>
                  <h2 className="fw-bold">500+</h2>
                  <h4 className="fw-light">Expert Mentors</h4>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex border p-3 my-3 bg-light rounded">
                <div className="mx-3 text-primary">
                  <GoogleIcon style={{ fontSize: "50px" }} />
                </div>
                <div>
                  <h2 className="fw-bold">4.9/5 (500)</h2>
                  <h4 className="fw-light">Google Rating</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Coaching;
