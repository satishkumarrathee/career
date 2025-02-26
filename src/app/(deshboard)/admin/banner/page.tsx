// import { getCurrentUser } from "@/actions/getCurrentUser";
import { Container, Row, Col } from "react-bootstrap";
// import NullData from "@/app/components/NullData";
import ManageBanner from "./ManageBanner";
import ShowBanner from "./ShowBanner";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";

const AddBanner = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                <ManageBanner />

                </Col>
                <hr />
                <Col md={12}>
                <ShowBanner />

                </Col>
            </Row>
        </Container>
    </div>);
}

export default AddBanner;