import { Col, Container, Row,Image } from "react-bootstrap";
import CareerForm from "./CareerForm";

interface CareerPageProps {
    name: string | undefined
    category: any,
}
const CareerPage:React.FC<CareerPageProps> = ({ name,category }) => {
    return (
        <Container>
            <Row className="my-4">
                <Col md={6}>
                 <div className="p-3 border">
                    <div>
                        <Image src={`/profile/${name}.jpg`} alt={name} fluid/>

                    </div>
                    <div><p > <span className="fw-bold fs-5" >Profile :</span> {name}</p></div>
                    <div><p> <span className="fw-bold fs-5" >Description :</span> {name}</p></div>
                 </div>


                </Col>
                <Col md={6}>
                    <CareerForm profile={name} categoryData={category} />
                </Col>
            </Row>
        </Container>
    );
}

export default CareerPage;