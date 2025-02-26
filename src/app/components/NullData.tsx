import { Col, Container, Image, Row } from "react-bootstrap";

const NullData = () => {
    return ( 
        <Container>
            <Row>
                <Col>
                <div className="my-5 p-2">
                <Image src="/notEnter.png" alt="Probhited Area" fluid />
                </div>
                </Col>
            </Row>
        </Container>
     );
}
 
export default NullData;