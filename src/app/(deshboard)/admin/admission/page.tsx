import { Col, Container, Row } from "react-bootstrap";
import ShowAdmission from "./ShowAdmission";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";
const AdminAdmission = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ShowAdmission />
                </Col>
            </Row> 
        </Container>
     );
}
 
export default AdminAdmission;