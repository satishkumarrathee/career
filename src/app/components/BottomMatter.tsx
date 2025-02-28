'use client'
import { Col, Container, Row,Image } from "react-bootstrap";
import Form from "./Form";
import University from "./University";
import { useState } from "react";



interface BottomMatterProps {
    category: any;
    courses: any
}
const BottomMatter:React.FC<BottomMatterProps> = ({ courses ,category}) => {
    const [selectedSpecilization, setSelectedSpecilization] = useState<string>('');
    const course = category.find((course:any) => course.name === selectedSpecilization);
    return (
        <Container>
            <Row className="my-4">
                <Col md={6}>
                <div>
                    <div>
                    <University />
                    </div>
                    <div>
                        <h2 className="fw-bold my-3">{courses}</h2>
                    </div>
                    {
                        selectedSpecilization ? <div>
                            <div><p className="fw-bold">Name : <span className="mx-2">{course.name}</span></p></div>
                            <div><p className="fw-bold">Duration : <span className="mx-2">{course.duration}</span></p></div>
                            <div><p className="fw-bold">Eligibilty : <span className="mx-2">{course.eligibilty}</span></p></div>
                         <div><p className="fw-bold">Description : <span className="mx-2">{course.description}</span></p></div></div> :

                     <div>
                            <div><p className="fw-bold">Name : <span className="mx-2">Please Wait</span></p></div>
                            <div><p className="fw-bold">Duration : <span className="mx-2">Please Wait</span></p></div>
                            <div><p className="fw-bold">Eligibilty : <span className="mx-2">Please Wait</span></p></div>
                         <div><p className="fw-bold">Description : <span className="mx-2">Please Wait</span></p></div></div>
                     }
                   {/* <div>
                       <p className="fw-bold">Eligibilty : <span className="mx-2">{category[0].eligibilty}</span></p>
                   </div>
                  <div>
                        <p className="fw-bold"> Duration : <span className="mx-2">{category[0].duration}</span></p>
                    </div>
                    <div>
                        <p className="fw-bold"> Description : <span className="mx-2">{category[0].description}</span></p>
                    </div> */}
                    
                    
                </div>
                   
                  
                </Col>
                <Col md={6}>
                    <Form course={courses} specilization={category} selectedSpecilization={selectedSpecilization} setSelectedSpecilization={setSelectedSpecilization}/>
                </Col>
            </Row>
        </Container>
    );
}

export default BottomMatter;