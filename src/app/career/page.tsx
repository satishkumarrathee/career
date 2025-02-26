'use client'
import { Col, Container, Image, Row } from "react-bootstrap";
import CareerData from '@/app/utils/job.json'
import Link from "next/link";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GoogleIcon from '@mui/icons-material/Google';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Heading from "@/app/components/Heading";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
const Career = () => {
    const router = useRouter()
    return (
        <>
            <div id="career">
                <Container>
                    <Row>
                        <Col md={2}>
                            <div className="my-3 text-light" >
                                <div>
                                    <p style={{ fontSize: '40px' }}>CAREER</p>
                                </div>
                                <hr />
                                <div>
                                    <p className="fs-6 my-2 fw-light text-light fw-bold">HOME / CAREER</p>
                                </div>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col md={12} className="mt-5 d-flex justify-content-between">
                            <div>
                                <Heading title="FIND" name="CAREER" /></div>
    

                    </Col>

                </Row>
            </Container>
        </div >
           
           
            <div>
                <Container>
                    <Row>
                        {
                            CareerData.map((item) => (

                                <Col md={3}>
                                    <div className="border p-3 my-3 text-center bg-body rounded">
                                        <div>
                                        <Link href={`/career/${item.id}`}> <Image src={`/job/${item.name}.jpg`} alt={item.name} fluid /></Link>
                                        </div>
                                        <hr />
                                        <Link href={`/career/${item.id}`}><p>{item.name}</p></Link>
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

export default Career;