import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import Heading from "@/app/components/Heading";
import AdmissionData from '@/app/utils/data.json'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Admissions Support | Colleges, Schools & Universities in Chandigarh, Mohali & Panchkula — CareerDefiner",
  description:
    "Expert admission support for schools, colleges & universities in Chandigarh, Mohali & Panchkula. Get step-by-step guidance for a smooth application process with CareerDefiner.",
  keywords: [
    "college admission",
    "school admission",
    "university admission",
    "Chandigarh",
    "Mohali",
    "Panchkula",
    "CareerDefiner"
  ],
  openGraph: {
    title:
      "Admissions Support | Colleges, Schools & Universities in Chandigarh, Mohali & Panchkula — CareerDefiner",
    description:
      "Expert admission support for schools, colleges & universities in Chandigarh, Mohali & Panchkula. Get step-by-step guidance for a smooth application process with CareerDefiner.",
    url: "https://careerdefiner.com/admission",
    siteName: "CareerDefiner",
    locale: "en_IN",
    type: "article",
  },
};
const Admission = () => {
  return (
    <>
      <div id="admission">
        <Container>
          <Row>
            <Col md={2}>
              <div className="my-3 text-light">
                <div>
                  <p style={{ fontSize: "40px" }}>ADMISSION</p>
                </div>
                <hr />
                <div>
                  <p className="fs-6 fw-light text-light fw-bold">
                    HOME / ADMISSION
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
              <Heading title="find" name="ADMISSION" />
            </Col>
          </Row>
        </Container>
      </div>


      <Container>
        <Row>
          {AdmissionData.map((item) => (
            <Col key={item.id} md={3} className="p-3">
             <Link className="m-0 p-0" href={`/admission/${item.id}`}> <div className="my-5">
                <Image  src={`/admission/data/${item.name}.png`} width={100} height={100} alt={item.name} fluid />
                <div>
                    <p className="mt-5" >{item.name}</p>
                </div>
            </div></Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Admission;
