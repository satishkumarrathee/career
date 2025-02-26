import { Col, Container, Row } from "react-bootstrap";
import ShowEmployer from "./ShowEmployer";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";

const AdminEmployer = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ShowEmployer />
                </Col>
            </Row> 
        </Container>
     );
}
 
export default AdminEmployer;