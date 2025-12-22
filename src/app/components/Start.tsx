import { Col, Container, Row } from "react-bootstrap";
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Start = () => {
    return (
        <Container className="">
            <Row className="justify-content-center">

                <Col md={4} className="mb-4">
                    <div className="text-center p-4 text-light rounded-4 shadow-lg transition-all hover-shadow border-0"  
                    style={{
                            background: "linear-gradient(135deg, #00b4d8 0%, #007bff 100%)",
                        }}>
                        <div className="mb-3">
                            <SchoolIcon style={{ fontSize: '70px' }} />
                        </div>
                        <p className="fs-4 fw-bold mb-1">90,000+</p>
                        <p className="fw-light mb-0">Applications Filled</p>
                    </div>
                </Col>

                <Col md={4} className="mb-4">
                    <div className="text-center p-4 text-light rounded-4 shadow-lg transition-all hover-shadow border-0" 
                     style={{
                            background: "linear-gradient(135deg, #00b4d8 0%, #007bff 100%)",
                        }}>
                        <div className="mb-3">
                            <LibraryBooksIcon style={{ fontSize: '70px' }} />
                        </div>
                        <p className="fs-4 fw-bold mb-1">30,000+</p>
                        <p className="fw-light mb-0">Admissions Done</p>
                    </div>
                </Col>

                <Col md={4} className="mb-4">
                    <div className="text-center p-4 text-light rounded-4 shadow-lg transition-all hover-shadow border-0"
                     style={{
                            background: "linear-gradient(135deg, #00b4d8 0%, #007bff 100%)",
                        }}
                    >
                        <div className="mb-3">
                            <PersonIcon style={{ fontSize: '70px' }} />
                        </div>
                        <p className="fs-4 fw-bold mb-1">150+</p>
                        <p className="fw-light mb-0">Career Counsellors</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Start;
