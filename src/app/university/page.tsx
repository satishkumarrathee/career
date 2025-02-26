import { Col, Container, Row,Image } from "react-bootstrap";
import ManageUniversity from "./University";
import IndexPage from "../components/OwlCarousel";

const University = () => {
    return ( 
        <Container>
            <Row>
                <Col md={6}>
               <div id="newDatas" className="p-5 d-flex justify-content-center align-items-center mt-5">
                <Image alt="logo" src="/logo.png" fluid/>
               </div>
                </Col>
                <Col md={6}>
                <ManageUniversity />
                </Col>
                <hr className="my-5" />
<IndexPage />
            </Row>
        </Container>
     );
}
 
export default University;