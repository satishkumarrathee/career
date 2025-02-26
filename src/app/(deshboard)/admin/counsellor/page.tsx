import { Container, Row, Col } from "react-bootstrap";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";
import ManageCounsellor from "./ManageCounsellor";
import ShowCounsellor from "./ShowCounsellor";


const Counsellor = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                    <ManageCounsellor/>
                  <ShowCounsellor />  
                </Col>
            </Row>
        </Container>
    </div>);
}

export default Counsellor;