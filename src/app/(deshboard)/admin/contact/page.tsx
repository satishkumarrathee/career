import { Col, Container, Row } from "react-bootstrap";
import ShowContact from "./showContact";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";

const AdminContact = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ShowContact />
                </Col>
            </Row> 
        </Container>
     );
}
 
export default AdminContact;