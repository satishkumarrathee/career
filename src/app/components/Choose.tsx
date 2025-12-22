import { Col, Container, Row } from "react-bootstrap";
import Heading from "./Heading";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import DiamondIcon from "@mui/icons-material/Diamond";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import LanguageIcon from "@mui/icons-material/Language";

const menuItems = [
  {
    name: "We Put You First",
    icon: MenuBookIcon,
    desc: "Our experienced counsellors and service team will work closely with you to ensure a seamless and stress-free admission and visa process.",
  },
  {
    name: "Experience",
    icon: EmojiObjectsIcon,
    desc: "With over 12 years of experience, our counsellors can help you figure out your next move.",
  },
  {
    name: "Passion",
    icon: DiamondIcon,
    desc: "We are passionate about helping students make better academic decisions that could change their lives forever.",
  },
  {
    name: "Affiliations",
    icon: NotificationsIcon,
    desc: "Our affiliations with over 700 universities worldwide ensure that you are not short of choices.",
  },
  {
    name: "Our Services",
    icon: QueueMusicIcon,
    desc: "Our services are designed to support you from the moment of initial counselling till completion of your admissions.",
  },
  {
    name: "Free of Cost",
    icon: LanguageIcon,
    desc: "No charges were taken from 95% of our students. The remaining 5% paid for special customised services.",
  },
];

const Choose = () => {
  return (
    <Container className="mb-5 px-3">
      <Row className=" mb-4">
        <Col md={12}>
          <Heading  title="WHY" name="CHOOSE US" />
          <p className="text-secondary small text-center">
            We provide value, trust, and expertise to make your career journey seamless.
          </p>
        </Col>
      </Row>

      <Row className="gy-4 gx-4">
        {menuItems.map(({ name, desc, icon: IconComponent }, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <div
              className="choose-card border border-primary bg-white rounded-4 p-4 h-100 d-flex flex-column justify-content-start align-items-start"
              style={{
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon */}
              <div
                className="d-flex align-items-center justify-content-center mb-3"
                style={{
                  backgroundColor: "#eaf0ff",
                  borderRadius: "12px",
                  padding: "12px",
                }}
              >
                <IconComponent style={{ fontSize: "42px", color: "#4e79ec" }} />
              </div>

              {/* Title */}
              <h5
                className="fw-semibold mb-2"
                style={{ color: "#0d2c6c", fontSize: "1.1rem" }}
              >
                {name}
              </h5>

              {/* Description */}
              <p
                className="text-secondary small"
                style={{ textAlign: "justify", lineHeight: "1.6" }}
              >
                {desc}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <style jsx>{`
        .choose-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(78, 121, 236, 0.15);
          border-color: #4e79ec;
        }

        @media (max-width: 767px) {
          .choose-card {
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
    </Container>
  );
};

export default Choose;
