import { Container, Row, Col } from "react-bootstrap";
import { getCurrentUser } from "../../../../actions/getCurrentUser";
import AdminLogin from "@/app/components/AdminLogin";
import ManageAdmin from "./ManageAdmin";
import CustomPieChart from "./CustomPieChart";

const AdminPage = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div className="my-5">
        <Container>
            <Row>
            <Col md={12} className="my-4 border">
                <h3 className="text-center fw-bold mt-3">Today</h3>
                <hr />
                   <CustomPieChart />
                </Col>
                <Col md={12} className="my-4 border">
                <h3 className="text-center fw-bold mt-3">Total</h3>
                <hr />
                 <ManageAdmin />
                </Col>
            </Row>
        </Container>
    </div>);
}

export default AdminPage;