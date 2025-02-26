import { Col, Container, Row } from "react-bootstrap";
import ManageExam from "./managePostexam";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../../actions/getCurrentUser";

const AdminExam = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ManageExam/>
                </Col>
            </Row> 
        </Container>
     );
}
 
export default AdminExam;