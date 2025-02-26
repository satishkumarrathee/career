import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";
import Heading from "@/app/components/Heading";
import  TruncateText  from "@/app/components/Truncate";

interface AdmissionPageProps {
    id: string | undefined,
    name: string | undefined,
    category: any | undefined
}

const AdmissionPage: React.FC<AdmissionPageProps> = ({ category, id, name }) => {
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col md={12} className="mt-5">
                            <Heading title={name} name="COURSES" />

                        </Col>

                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        {
                            category && category.map((item: any) => (
                                <Col md={3} className="my-3">
                                   <Link href={`/admission/${id}/${item.id}`}> <div className="border rounded">
                                        {/* */}
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Image src={`/admissionCourse/${item.name}.jpg`} alt={item.name} fluid />
                                        </div>
                                        <div>
                                            <p className="text-center" style={{ fontSize: '14px' }}><TruncateText  itemName={item.name}/></p>

                                        </div>
                                        <div >
                                             <h6 className="rounded p-2 m-0 text-center bg-primary text-light">Compare</h6>
                                        </div>
                                    </div></Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div> </>
    );
}

export default AdmissionPage;