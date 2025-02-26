// import { getCurrentUser } from "@/actions/getCurrentUser";
import { Container, Row, Col } from "react-bootstrap";
// import NullData from "@/app/components/NullData";
import ManageBlog from "./ManageBlog";
import ShowBlog from "./ShowBlog";
import AdminLogin from "@/app/components/AdminLogin";
import { getCurrentUser } from "../../../../../actions/getCurrentUser";

const AddBlog = async() => {
    const currentUser = await getCurrentUser();
    if (!currentUser || (currentUser.role !== 'ADMIN' && currentUser.role !== 'SUBADMIN' && currentUser.role !== 'SUPERADMIN')) {
        return <AdminLogin />;
    }
    return (<div>
        <Container>
            <Row>
                <Col md={12}>
                <ManageBlog />

                </Col>
                <hr />
                <Col md={12}>
                <ShowBlog />

                </Col>
            </Row>
        </Container>
    </div>);
}

export default AddBlog;