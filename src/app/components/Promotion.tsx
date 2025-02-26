'use client'
import Link from "next/link";
import { Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./Heading";
 const logo =[
    {name:"callus",url:"/"},
    {name:"kewsquare",url:"https://kewsquarebspl.com"},
    {name:"legalopinions",url:"https://legalopinions.in"},
    {name:"tricity",url:"http://tricityinstitutions.com/"}
 ]

const Promotion = () => {
    return ( <>
     <Container>
     <hr />

<Row>
    <Col>
   <Heading title="OUR" name="WEBSITES"/>
    </Col>
</Row>

</Container>
     <Container>

<Row className="my-5">

    {
        logo.map(({name,url})=>(
            <Col xl={3} md={4}className="p-3">
            <div className="d-flex align-items-center justify-content-center">
        <Link href={url} target="_blank">
            <Image src={`/companylogo/${name}.png`}  alt={name} fluid/>
        </Link>
        </div>
        </Col>

        ))
    }
  
   
</Row>
</Container>
    </> );
}
 
export default Promotion;