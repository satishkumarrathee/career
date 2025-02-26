import { Container, Row, Col } from "react-bootstrap";
import { getCurrentUser } from "../../../../actions/getCurrentUser";
import AdminLogin from "@/app/components/AdminLogin";
import ManageAdmin from "./ManageAdmin";

const AdminPage = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div className="my-5">
        <Container>
            <Row>
                <Col md={12}>
                 <ManageAdmin />
                </Col>
            </Row>
        </Container>
    </div>);
}

export default AdminPage;