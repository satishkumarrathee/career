import { Col, Container, Row,Image } from "react-bootstrap";
import CoachingForm from "./CoachingForm";
import CoachingData from '@/app/utils/coaching.json'
import StarIcon from '@mui/icons-material/Star';


interface CoachingPageProps {
    name:string | undefined
}

const CoachingPage:React.FC<CoachingPageProps> = ({name}) => {
    return ( <div>
        <Container>
            <Row className="my-4">
                <Col md={6}>
                    <Row>
                    {
                    CoachingData.map((item)=>(
                        <Col key={item.name} md={4}>
                    <div className="border p-2 my-2 shadow rounded">
                        <div>
                            <Image src={`/coaching/${item.name}.jpg`} alt={item.name} fluid />
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
                    <CoachingForm coaching={name} />
                </Col>
            </Row>
        </Container>
    </div> );
}
 
export default CoachingPage;





