import { Col, Container, Image, Row } from "react-bootstrap";
import UniversityForm from "@/app/components/UniversityForm";

const Form = () => {
    return ( 
        <Container>
            <Row>
            <Col md={6} className="p-5" id="UniversityForm">
                    <div className="d-flex justify-content-center align-content-center p-5 mt-5">
                        <Image src="/logo.png" alt="career definer" fluid />
                    </div>
                </Col>
                <Col md={6}>
                    <UniversityForm />
                </Col>
               
            </Row>
        </Container>
     );
}
 
export default Form;