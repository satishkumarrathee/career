"use client"
import { Col, Container, Row } from "react-bootstrap";
import Youtube from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/X";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const Header1 = () => {
  const router = useRouter();
  return (
    <div className="bg-primary">
      <Container>
        <Row>
          <Col md={12}>
            <div className="d-flex justify-content-between pt-2 my-2">
              <div className="d-flex">
                <div className="me-5 p-0">
                  <p className="text-light">
                    <span>
                      <PhoneIcon />
                    </span>{" "}
                    +91-8699986933
                  </p>
                </div>

                <div className="m-0 p-0">
                  <Link
                    href={"https://www.facebook.com/careerdefinerindia"}
                    target="_blank"
                  >
                    <Facebook fontSize="medium" className="mx-1 text-light" />
                  </Link>
                  <Link
                    href={"https://www.youtube.com/@careerdefiner1"}
                    target="_blank"
                  >
                    <Youtube color="error" fontSize="medium" className="mx-1" />
                  </Link>
                  <Link
                    href={"https://twitter.com/career_definer"}
                    target="_blank"
                  >
                    <Twitter fontSize="medium" className="mx-1 text-dark" />
                  </Link>
                  <Link
                    href={"https://www.instagram.com/careerdefiner1"}
                    target="_blank"
                  >
                    <Instagram
                      color="error"
                      fontSize="medium"
                      className="mx-1"
                    />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/company/career-definer"}
                    target="_blank"
                  >
                    <LinkedIn fontSize="medium" className="mx-1 text-light" />
                  </Link>
                </div>
              </div>
              <div >
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={() => router.push("/university")}
                >
                  for business enquiry
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header1;
