import { Col, Container, Image, Row } from "react-bootstrap";
import ExamData from '@/app/utils/exam.json'
import Link from "next/link";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GoogleIcon from '@mui/icons-material/Google';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Heading from "@/app/components/Heading";
import TruncateText  from "@/app/components/Truncate";
const Exam = () => {
  
    return (
        <>
        <div id="exam">
        <Container>
            <Row>
                <Col md={2}>
                    <div className="my-3 text-light" >
                        <div>
                            <p style={{ fontSize: '40px' }}>EXAM</p>
                        </div>
                        <hr />
                        <div>
                            <p className="fs-6 my-2 fw-light text-light fw-bold">HOME / EXAM</p>
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
                           <Heading title="FIND" name="LATEST EXAM INSTITUTE" />

                        </Col>

                    </Row>
                </Container>
            </div>
           
           
            <div>
                <Container>
                    <Row>
                        {
                            ExamData.map((item) => (

                                <Col md={3}>
                                    <div className="border p-3 my-3 text-center bg-body rounded">
                                        <div>
                                        <Link href={`/exam/${item.id}`}> <Image src={`/exam/${item.name}.jpg`} alt={item.name} fluid /></Link>
                                        </div>
                                        <hr />
                                        <Link href={`/exam/${item.id}`}><p style={{ fontSize: '14px' }}><TruncateText itemName={item.name}/> </p></Link>
                                    </div>
                                </Col>
                            ))
                        }


                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="d-flex border p-3 my-3 bg-light rounded">

                                <div className="mx-3 text-primary">
                                    <AdminPanelSettingsIcon style={{ fontSize: '50px' }} />

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
                                    <SupportAgentIcon style={{ fontSize: '50px' }} />

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
                                    <GoogleIcon style={{ fontSize: '50px' }} />

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
}

export default Exam;