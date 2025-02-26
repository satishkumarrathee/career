import { Col, Container, Row } from "react-bootstrap";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";
import ShowPopup from "./ShowPopup";

const Popup = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return ( 
        <Container>
            <Row>
                <Col md={12}>
                    <ShowPopup/>
                </Col>
            </Row> 
        </Container>
     );
}
 
export default Popup;