import { Col, Container, Row } from "react-bootstrap";
import Heading from "@/app/components/Heading";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ModeFanOffIcon from "@mui/icons-material/ModeFanOff";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FlagIcon from "@mui/icons-material/Flag";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
const About = () => {
  return (
    <>
      <div id="about">
        <Container>
          <Row>
            <Col md={2}>
              <div className="my-3 text-light">
                <div>
                  <p style={{ fontSize: "40px" }}>ABOUT</p>
                </div>
                <hr />
                <div>
                  <p className="fs-6 fw-light text-light fw-bold">
                    HOME / ABOUT
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="my-5">
            <Col md={12}>
              <Heading title="ABOUT " name="CAREER DEFINER" />
              <div>
                <p style={{ textAlign: "justify" }}>
                  Career Definer is a cutting-edge search engine designed for
                  the new generation, offering a comprehensive range of services
                  from course selection to confirmation of admission, all under
                  one roof. Our mission is to redefine how individuals navigate
                  their career paths by providing advanced tools and support
                  tailored to the dynamic career market. Additionally "KewSquare
                  Business Solutions is the parent company of Career Definer,
                  which specializes in diverse operational activities.
                </p>
                <p style={{ textAlign: "justify" }}>
                  We have been active in the education market since 2001,
                  specializing in student mobilization and providing leads to
                  universities. Initially, our operations were offline. However,
                  recognizing the evolving needs of the current market, we have
                  developed this advanced search engine. This platform allows
                  students to directly connect with universities without
                  incurring any counselling fees.
                </p>
                <p style={{ textAlign: "justify" }}>
                  Explore our diverse range of resources, engage with our
                  supportive community, and take the first step towards
                  realizing your dreams. Together, let's pave the way for a
                  brighter future filled with endless possibilities. Career
                  Definer also collaborates with universities and schools,
                  organizing seminars and student interaction events to enhance
                  student outreach.
                </p>
                <p style={{ textAlign: "justify" }}>
                  At Career Definer, we're your go-to destination for career
                  advancement, job opportunities, exam preparation, and
                  admissions guidance. We believe everyone deserves the chance
                  to build a fulfilling career, and we're here to simplify that
                  journey for you.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <RemoveRedEyeIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Our Vision</p>
                </div>
                <div>
                  <p className="fw-light">
                  Is to redefine the way individuals navigate their career paths, providing them with the tools and support they need to succeed in today is dynamic job market.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <FlagIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Mission</p>
                </div>
                <div>
                  <p className="fw-light">
                  To empowering students and job
 seekers to shape their future and
 acheive their career aspirations.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <EmojiObjectsIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Objective</p>
                </div>
                <div>
                  <p className="fw-light">
                  To Empower young Individuals to choose their Career Path Wisely.
                  </p>
                  <p className="fw-light">
                  To succeed in todays dynamic Education and Job Market.
                  </p>
                  
            
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Heading title="WHAT " name="WE OFFER" />
            </Col>
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <CastForEducationIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Education</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    Discover a diverse array of courses tailored to enrich your
                    expertise and understanding across different domains.
                    Whether you seek to progress in your current vocation
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <ModelTrainingIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Career Guidance</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    Navigate your career path with confidence through our expert
                    advice and resources. From resume writing tips to interview
                    strategies, we equip you with the tools and knowledge needed
                    to stand out in today's competitive job market.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <WorkOutlineIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Job Opportunities</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    Discover exciting job openings across industries and
                    locations. Our platform connects you with employers actively
                    seeking talented individuals like yourself. Whether you're
                    seeking entry-level positions or executive roles, we're here
                    to help you find the perfect fit.
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
              <Heading title="WHY CHOOSE " name="CAREER DEFINER" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={3} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <ModeFanOffIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Flexibility</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                   
Experience the freedom to tailor your personalized and flexible learning experience with our dynamic online platform.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <FlutterDashIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Expertise</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    Benefit from the insights and guidance of industry experts
                    who are passionate about helping you succeed in your career
                    endeavors.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <PeopleIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Community</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    Join a supportive community of learners and professionals
                    who share your aspirations and can offer valuable insights
                    and networking opportunities.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3} className="my-2">
              <div className="border p-3 text-secondary h-100">
                <div>
                  <AssessmentIcon style={{ fontSize: "70px" }} />
                </div>
                <div>
                  <p className="fs-4 my-3">Accessibility</p>
                </div>
                <div>
                  <p className="fw-light" style={{ textAlign: "justify" }}>
                    We believe that education and career advancement should be
                    accessible to all. That's why we strive to make our
                    resources affordable and inclusive.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
