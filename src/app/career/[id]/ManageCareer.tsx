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
import TruncateText from "@/app/components/Truncate";

interface ManageCareerProps {
    id:string | undefined,
    name:string | undefined,
    category:any
}

const ManageCareer:React.FC<ManageCareerProps> = ({id,name,category}) => {
    const router = useRouter()
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col md={12} className="mt-5">
                            <div>
                                <Heading title="" name={name} /></div>    
                    </Col>
                </Row>
            </Container>
        </div >
           
           
            <div>
                <Container>
                    <Row>
                        {
                            category.map((item:any) => (

                                <Col md={3}>
                                 <Link href={`/career/${id}/${item.id}`}><div className="border p-3 my-3 text-center bg-body rounded">
                                        <div>
                                         <Image src={`/services/${item.type}.png`} width={100} height={100} alt={item.type} fluid />
                                        </div>
                                        <hr />
                                      <p><TruncateText  itemName={item.type}/></p>
                                    </div></Link>
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

export default ManageCareer;