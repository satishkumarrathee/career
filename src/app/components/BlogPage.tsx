import { Col, Container, Row, Image } from "react-bootstrap";


interface BlogPageProps {
  name: string;
  title: string | undefined;
  message: string | TrustedHTML;
  imgUrl: string | undefined;
}

const BlogPage: React.FC<BlogPageProps> = ({ name,imgUrl, title, message }) => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="my-4">
            <div >
            <div className="fs-1 fw-bold text-center my-2">{title}</div>
            <div>
                  <p className="fs-2  my-3 text-center">{name}</p>
                </div>
            <hr />
              <div className="d-flex align-items-center justify-content-center">
                <Image src={imgUrl} alt={name} fluid />
              </div>
              <div className="ms-4">
              
                
              </div>
            </div>
            <hr />
           
            <div>
            <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: message }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
