import { Col, Container, Row } from "react-bootstrap";
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Heading from "./Heading";

const Start = () => {
    return (
        <Container>
            <Row>
                {/* <Heading name="Career Definer" /> */}
                <Col md={4}>
                    <div className="border text-center p-3 text-light bg-primary my-2">
                        <div>
                            <SchoolIcon style={{ fontSize: '70px' }} />
                        </div>
                        <div>
                            <p className="fs-5 my-3">90000+</p>

                        </div>
                        <div className="fw-light">
                            <p>Applications Filled</p>
                        </div>

                    </div>
                </Col>
                <Col md={4}>
                    <div className="border text-center p-3 text-light bg-primary my-2">
                        <div>
                            <LibraryBooksIcon style={{ fontSize: '70px' }} />
                        </div>
                        <div>
                            <p className="fs-5 my-3">25000+</p>

                        </div>
                        <div className="fw-light">
                            <p>Admission Done</p>
                        </div>

                    </div>
                </Col>
                <Col md={4}>
                    <div className="border text-center p-3 text-light bg-primary my-2">
                        <div>
                            <PersonIcon style={{ fontSize: '70px' }} />
                        </div>
                        <div>
                            <p className="fs-5 my-3">130+</p>

                        </div>
                        <div className="fw-light">
                           <p>Career Counsellor </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Start;