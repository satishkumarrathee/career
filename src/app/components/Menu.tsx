import { Col, Container, Row } from "react-bootstrap";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SchoolIcon from '@mui/icons-material/School';
import Heading from "./Heading";

const Menu = () => {
    return (
        <Container className="mb-5">
            <Row>
            <Heading title="WHAT MAKES US " name="STAND APART" />
                <Col xl={3} md={4}>
                    <div className="text-primary p-4 m-4" style={{borderLeft:'5px solid blue',height:"300px",borderRadius:'10px'}}>
                        <div>
                            <GroupsIcon style={{fontSize:"50px"}}/>
                            
                        </div>
                        <div className="my-3">
                            <p className="fs-6 fw-bold">10 Million +</p>

                        </div>
                        <div>
                        <p className="fs-5 fw-light">Students Trust Career Definer for Unbiased Career Counselling</p>
                        </div>
                    </div>

                </Col>
                <Col xl={3} md={4}>
                    <div  className="text-warning p-4 m-4" style={{borderLeft:'5px solid orange',height:"300px",borderRadius:'10px'}}>
                        <div>
                            <ThumbUpOffAltIcon  style={{fontSize:"50px"}}/>
                            
                        </div>
                        <div className="my-3">
                            <p className="fs-6 fw-bold">1000+ Approved</p>

                        </div>
                        <div>
                        <p className="fs-5 fw-light">Colleges & Universities Listed on Career Definer</p>
                        </div>
                    </div>

                </Col>
                <Col xl={3} md={4}>
                    <div  className="text-info p-4 m-4" style={{borderLeft:'5px solid skyBlue',height:"300px",borderRadius:'10px'}}>
                        <div>
                            <Diversity2Icon  style={{fontSize:"50px"}}/>
                            
                        </div>
                        <div className="my-3">
                            <p className="fs-6 fw-bold">Unbiased Experts</p>

                        </div>
                        <div>
                        <p className="fs-5 fw-light">Guidance by Our Certified Career Counselors</p>
                        </div>
                    </div>

                </Col>
                <Col xl={3} md={4}>
                    <div  className="text-success p-4 m-4" style={{borderLeft:'5px solid green',height:"300px", borderRadius:'10px'}}>
                        <div>
                            <SchoolIcon  style={{fontSize:"50px"}}/>
                            
                        </div>
                        <div className="my-3">
                            <p className="fs-6 fw-bold">Complete Assistance</p>

                        </div>
                        <div>
                        <p className="fs-5 fw-light">We are with you until you get your Degree, Certification, and Job.</p>
                        </div>
                    </div>

                </Col>
            </Row>

        </Container>
    );
}

export default Menu;