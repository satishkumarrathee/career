import { Col, Container, Row } from "react-bootstrap";

interface HeadingProps {
    name: string | undefined,
    title: string | undefined
}
const Heading: React.FC<HeadingProps> = ({ name,title }) => {
    return (
        <Container>
            <Row>
                <Col className="mb-3">
                    <div >
                        <div>
                            <h3 className="text-uppercase">{title}  <span style={{ color: '#007bff' }}>{name}</span></h3>
                        </div>
                        <div className="bottomLine" ></div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Heading;