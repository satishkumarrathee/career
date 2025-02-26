import { Container, Row, Col } from "react-bootstrap";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";
import ShowAdmin from "./ShowAdmin";

const AdminUser = async() => {
    const currentUser = await getCurrentUser();
    if(!currentUser || currentUser.role !== 'SUPERADMIN'){
        return  <AdminLogin/>
    }
    
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                   <ShowAdmin/>
                </Col>
            </Row>
        </Container>
    </div>);
}

export default AdminUser;