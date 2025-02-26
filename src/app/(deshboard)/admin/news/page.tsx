import { Container, Row, Col } from "react-bootstrap";
import ShowNews from "./ShowNews";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";
import ManageNews from "./ManageNews";


const News = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                    <ManageNews/>
                  <ShowNews />  
                </Col>
            </Row>
        </Container>
    </div>);
}

export default News;