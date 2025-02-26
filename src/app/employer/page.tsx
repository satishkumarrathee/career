import { Col, Container, Row } from "react-bootstrap";
import ManageEmployer from "./ManageEmployer";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth";
import Login from "@/app/login/page"; 


const Employer = async () => {


  try {
    const session = await getServerSession(authOptions);
    return (
      <>
        {session?.user?.email ? (
          <Container>
            <Row>
              <Col>
                <ManageEmployer />
              </Col>
            </Row>
          </Container>
        ) : (
          <Login/>
        )}
      </>
    );
  } catch (error) {
    console.error("Error retrieving session:", error);
    return (
      <div className="text-center my-5 text-danger">
        <h1>Error retrieving session. Please try again later.</h1>
      </div>
    );
  }
};

export default Employer;
