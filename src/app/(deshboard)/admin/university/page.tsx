import { Container, Row, Col } from "react-bootstrap";
import ShowUniversity from "./ShowUniversity";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";


const University = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                  <ShowUniversity />  
                </Col>
            </Row>
        </Container>
    </div>);
}

export default University;