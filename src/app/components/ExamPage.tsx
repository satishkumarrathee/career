import { Col, Container, Row,Image } from "react-bootstrap";
import ExamForm from "./ExamForm";
import ExamData from '@/app/utils/exam.json'
import StarIcon from '@mui/icons-material/Star';


interface ExamPageProps {
    name:string | undefined
}

const ExamPage:React.FC<ExamPageProps> = ({name}) => {
    return ( <div>
        <Container>
            <Row className="my-4">
                <Col md={6}>
                    <Row>
                    {
                    ExamData.map((item)=>(
                        <Col key={item.name} md={4}>
                    <div className="border p-2 my-2 shadow rounded">
                        <div>
                            <Image src={`/exam/${item.name}.jpg`} alt={item.name} fluid />
                        </div>
                    </div>
                </Col>

                    ))
                }

                <Col md={12}>
                    <div className="my-3">
                    <p className="text-center p-2 fs-5 bg-light shadow"><span><StarIcon/></span> Dedicated Assistance from our Certified Experts</p>
                    </div>
                    <p className="text-center p-2 fs-5 bg-light shadow"><span><StarIcon/></span> Real Time Data of Universities to help you to decide</p>
                </Col>
                    </Row>


                </Col>
                <Col md={6}>
                    <ExamForm exam={name} />
                </Col>
            </Row>
        </Container>
    </div> );
}
 
export default ExamPage;





