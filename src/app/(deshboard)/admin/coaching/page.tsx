import { Col, Container, Row } from "react-bootstrap";
import ShowCoaching from "./ShowCoaching";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";

const AdminCoaching = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ShowCoaching />
                </Col>
            </Row> 
        </Container>
     );
}
 
export default AdminCoaching;